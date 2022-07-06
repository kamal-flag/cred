package com.cred.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.cred.services.dto.PaysDto;
import com.cred.services.dto.UserDto;
import com.cred.services.dto.UserInfoDto;
import com.cred.services.requests.EditPasswordRequest;



public interface IUserService extends UserDetailsService{

	public UserDto createUser(UserDto userDto);
	UserInfoDto edit(UserDto dto);
	UserInfoDto editPassword(EditPasswordRequest dto);
	void delete(Long id) throws Exception;
	UserInfoDto get(Long id) ;
	List<UserInfoDto> getAll();
	Page<UserInfoDto> getPageable(String nom, String prenom, Pageable pageable);
	public Optional<UserDto>  getUser(String email);
	/*public UserDto getUserByUserId (String userId);
	public UserDto updateUser(String userId , UserDto userDto);
	public void deleteUser(String userId);
	public List<UserDto> getUsers(int page,int limit, String search, int status);*/
	
}
