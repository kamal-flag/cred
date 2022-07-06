package com.cred.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cred.entities.AssocieGerant;
import com.cred.entities.Entreprise;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.AssocieGerantRepository;
import com.cred.repositories.EntrepriseAssocieGerantRepository;
import com.cred.repositories.EntrepriseRepository;
import com.cred.repositories.specifications.AssocieGerantSpecification;
import com.cred.services.IAssocieGerantService;
import com.cred.services.dto.AssocieGerantDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class AssocieGerantServiceImpl implements IAssocieGerantService{

	@Autowired
	private AssocieGerantRepository repository;
	
	@Autowired
	private EntrepriseRepository entrepriseRepository;
	
	@Autowired
	private EntrepriseAssocieGerantRepository entrepriseAssocieGerantRepository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public AssocieGerantDto create(AssocieGerantDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, AssocieGerant.class)),
				AssocieGerantDto.class);
	}

	@Override
	public AssocieGerantDto edit(AssocieGerantDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, AssocieGerant.class)),
				AssocieGerantDto.class);
	}

	@Override
	public void delete(Long id) throws Exception {
		if(!repository.existsById(id)) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		
		try {
			repository.deleteById(id);
		} catch(Exception e) {
			throw new SuppressionImpossibleException(MessageErrorGeneral.SUPPRESSION_IMPOSSIBLE.getMessage());
		}
	}

	@Override
	public AssocieGerantDto get(Long id) {
		Optional<AssocieGerant> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), AssocieGerantDto.class);
	}

	@Override
	public List<AssocieGerantDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), AssocieGerantDto.class);
	}

	@Override
	public Page<AssocieGerantDto> getPageable(String identifiant, Pageable pageable) {
		Specification<AssocieGerant> specifications = Specification.where(AssocieGerantSpecification.likeIdentifiant(identifiant));
		Page<AssocieGerant> objects = repository.findAll(specifications, pageable);
		Page<AssocieGerantDto> dtos = utilsGeneric.mapPageToOther(objects, AssocieGerantDto.class);
		
		return dtos;
	}

	@Override
	public List<AssocieGerantDto> getAllNotInEntreprise(Long entrepriseId) {
		Optional<Entreprise> entreprise = entrepriseRepository.findById(entrepriseId);
		if(entreprise.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		List<AssocieGerant> entrepriseAssocieGerants = entrepriseAssocieGerantRepository.findByEntreprise(entreprise.get()).stream().map(object -> object.getAssocieGerant()).collect(Collectors.toList());
		
		List<AssocieGerant> associeGerant = repository.findAll();
		associeGerant.removeAll(entrepriseAssocieGerants);
		
		return utilsGeneric.mapListToOther(associeGerant, AssocieGerantDto.class);
		//return null;
	}
}
