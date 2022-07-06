package com.cred.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cred.entities.DonneeComptable;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.DonneeComptableRepository;
import com.cred.repositories.specifications.DonneeComptableSpecification;
import com.cred.services.IDonneeComptableService;
import com.cred.services.dto.DonneeComptableDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class DonneeComptableServiceImpl implements IDonneeComptableService{

	@Autowired
	private DonneeComptableRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public DonneeComptableDto create(DonneeComptableDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, DonneeComptable.class)),
				DonneeComptableDto.class);
	}

	@Override
	public DonneeComptableDto edit(DonneeComptableDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, DonneeComptable.class)),
				DonneeComptableDto.class);
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
	public DonneeComptableDto get(Long id) {
		Optional<DonneeComptable> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), DonneeComptableDto.class);
	}

	@Override
	public List<DonneeComptableDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), DonneeComptableDto.class);
	}

	@Override
	public Page<DonneeComptableDto> getPageable(Pageable pageable) {
		Page<DonneeComptable> objects = repository.findAll(pageable);
		Page<DonneeComptableDto> dtos = utilsGeneric.mapPageToOther(objects, DonneeComptableDto.class);
		
		return dtos;
	}
	
	@Override
	public Page<DonneeComptableDto> getPageable(Long entrepriseId, Pageable pageable) {
		Specification<DonneeComptable> specifications = Specification.where(DonneeComptableSpecification.equalEntreprise(entrepriseId));
		Page<DonneeComptable> objects = repository.findAll(specifications, pageable);
		Page<DonneeComptableDto> dtos = utilsGeneric.mapPageToOther(objects, DonneeComptableDto.class);
		
		return dtos;
	}
}
