package com.cred.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cred.entities.Caution;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.CautionRepository;
import com.cred.repositories.specifications.CautionSpecification;
import com.cred.services.ICautionService;
import com.cred.services.dto.CautionDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class CautionServiceImpl implements ICautionService{

	@Autowired
	private CautionRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public CautionDto create(CautionDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, Caution.class)),
				CautionDto.class);
	}

	@Override
	public CautionDto edit(CautionDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, Caution.class)),
				CautionDto.class);
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
	public CautionDto get(Long id) {
		Optional<Caution> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), CautionDto.class);
	}

	@Override
	public List<CautionDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), CautionDto.class);
	}

	@Override
	public Page<CautionDto> getPageable(Pageable pageable) {
		Page<Caution> objects = repository.findAll(pageable);
		Page<CautionDto> dtos = utilsGeneric.mapPageToOther(objects, CautionDto.class);
		
		return dtos;
	}
	
	@Override
	public Page<CautionDto> getPageable(Long entrepriseId, String numeroArrivee, Pageable pageable) {
		Specification<Caution> specifications = Specification.where(CautionSpecification.equalEntreprise(entrepriseId))
				.and(CautionSpecification.equalNumeroArrivee(numeroArrivee));
		Page<Caution> objects = repository.findAll(specifications, pageable);
		Page<CautionDto> dtos = utilsGeneric.mapPageToOther(objects,CautionDto.class);
		
		return dtos;
	}
}
