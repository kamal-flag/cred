package com.cred.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;

import com.cred.entities.User;
import com.cred.exceptions.customExceptions.BadRequestException;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.exceptions.messages.users.MessageErrorUser;
import com.cred.repositories.UserRepository;
import com.cred.repositories.specifications.UserSpecification;
import com.cred.services.IUserService;
import com.cred.services.dto.UserDto;
import com.cred.services.dto.UserInfoDto;
import com.cred.services.requests.EditPasswordRequest;
import com.cred.utils.IUtilsGeneric;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private IUtilsGeneric utilsGeneric;

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<User> user = userRepository.findByEmail(email);

		 if(user.isEmpty()) { throw new UsernameNotFoundException(email); }

		return new org.springframework.security.core.userdetails.User(user.get().getEmail(),
				user.get().getEncryptedPassword(), new ArrayList<>());
	}

	@Override
	public UserDto createUser(UserDto userDto) {

		Optional<User> checkUser = userRepository.findByEmail(userDto.getEmail());
		if (checkUser.isPresent()) {
			throw new BadRequestException(MessageErrorUser.USER_EXIST.getMessage());
		}
			
		

		userDto.setEncryptedPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));
		userDto.setUserId(utilsGeneric.generateStringId(32));
		return utilsGeneric.map(userRepository.save(utilsGeneric.map(userDto, User.class)), UserDto.class);
	}

	@Override
	public Optional<UserDto> getUser(String email) {

		return Optional.ofNullable(utilsGeneric.map(userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("aucun utilisateur n'existe avec cette email")), UserDto.class));
	}

	@Override
	public UserInfoDto edit(UserDto dto) {
		Optional <User> user = userRepository.findById(dto.getId());
		if (user.isEmpty()) {
			throw new BadRequestException(MessageErrorUser.USER_NO_EXIST.getMessage());
		}
		//dto.setEncryptedPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		//user.get().setId(dto.getNom());
		user.get().setEncryptedPassword(bCryptPasswordEncoder.encode(dto.getPassword()));
		user.get().setNom(dto.getNom());
		user.get().setPrenom(dto.getPrenom());
		user.get().setEmail(dto.getEmail());
		user.get().setFonction(dto.getFonction());
		user.get().setRole(dto.getRole());
		///utilsGeneric.map(user, UserDto.class);
		/*return utilsGeneric.map(userRepository.save(utilsGeneric.map(dto, User.class)),
				UserDto.class);*/
		return utilsGeneric.map(userRepository.save(user.get()), UserInfoDto.class);
		//return utilsGeneric.map(user,  UserDto.class);
	}
	
	@Override
	public UserInfoDto editPassword(EditPasswordRequest dto) {
		Optional <User> user = userRepository.findById(dto.getId());
		if (user.isEmpty()) {
			throw new BadRequestException(MessageErrorUser.USER_NO_EXIST.getMessage());
		}
		//dto.setEncryptedPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		if(!bCryptPasswordEncoder.matches(dto.getOldPassword(), user.get().getEncryptedPassword())) {
			throw new BadRequestException(MessageErrorUser.INCORRECT_OLD_PASSWORD.getMessage());
		}
		
		user.get().setEncryptedPassword(bCryptPasswordEncoder.encode(dto.getNewPassword()));
		return utilsGeneric.map(userRepository.save(user.get()), UserInfoDto.class);
	}

	@Override
	public void delete(Long id) throws Exception {
		if(!userRepository.existsById(id)) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		
		try {
			userRepository.deleteById(id);
		} catch(Exception e) {
			throw new SuppressionImpossibleException(MessageErrorGeneral.SUPPRESSION_IMPOSSIBLE.getMessage());
		}
	}

	@Override
	public UserInfoDto get(Long id) {
		Optional<User> object = userRepository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), UserInfoDto.class);
	}

	@Override
	public List<UserInfoDto> getAll() {
		return utilsGeneric.mapListToOther(userRepository.findAll(), UserInfoDto.class);
	}

	@Override
	public Page<UserInfoDto> getPageable(String nom, String prenom, Pageable pageable) {
		
		Specification<User> specifications = Specification.where(UserSpecification.likeNom(nom))
				.and(UserSpecification.likePrenom(prenom));
		Page<User> objects = userRepository.findAll(specifications, pageable);
		Page<UserInfoDto> dtos = utilsGeneric.mapPageToOther(objects, UserInfoDto.class);
		
		return dtos;
	}


}
