package com.cred.services.impl;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cred.entities.EntrepriseAssocieGerant;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.EntrepriseAssocieGerantRepository;
import com.cred.repositories.specifications.EntrepriseAssocieGerantSpecification;
import com.cred.services.IEntrepriseAssocieGerantService;
import com.cred.services.dto.EntrepriseAssocieGerantDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class EntrepriseAssocieGerantServiceImpl implements IEntrepriseAssocieGerantService{

	@Autowired
	private EntrepriseAssocieGerantRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Autowired
	private EntityManager entityManager;
	
	@Transactional
	@Override
	public EntrepriseAssocieGerantDto create(EntrepriseAssocieGerantDto dto) {
		
		EntrepriseAssocieGerant object =  repository.save(utilsGeneric.map(dto, EntrepriseAssocieGerant.class));
		
		entityManager.refresh(object);
		
		return utilsGeneric.map(object,
				EntrepriseAssocieGerantDto.class);
	}

	@Override
	public EntrepriseAssocieGerantDto edit(EntrepriseAssocieGerantDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, EntrepriseAssocieGerant.class)),
				EntrepriseAssocieGerantDto.class);
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
	public EntrepriseAssocieGerantDto get(Long id) {
		Optional<EntrepriseAssocieGerant> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), EntrepriseAssocieGerantDto.class);
	}

	@Override
	public List<EntrepriseAssocieGerantDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), EntrepriseAssocieGerantDto.class);
	}

	@Override
	public Page<EntrepriseAssocieGerantDto> getPageable(Pageable pageable) {
		Page<EntrepriseAssocieGerant> objects = repository.findAll(pageable);
		Page<EntrepriseAssocieGerantDto> dtos = utilsGeneric.mapPageToOther(objects, EntrepriseAssocieGerantDto.class);
		
		return dtos;
	}
	
	@Override
	public Page<EntrepriseAssocieGerantDto> getPageable(Long entrepriseId, String identifiant, Pageable pageable) {
		Specification<EntrepriseAssocieGerant> specifications = Specification.where(EntrepriseAssocieGerantSpecification.equalEntreprise(entrepriseId))
				.and(EntrepriseAssocieGerantSpecification.likeIdentifiant(identifiant));
		Page<EntrepriseAssocieGerant> objects = repository.findAll(specifications, pageable);
		Page<EntrepriseAssocieGerantDto> dtos = utilsGeneric.mapPageToOther(objects, EntrepriseAssocieGerantDto.class);
		
		return dtos;
	}
}
