package com.cred.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cred.entities.Pays;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.PaysRepository;
import com.cred.repositories.specifications.PaysSpecification;
import com.cred.services.IPaysService;
import com.cred.services.dto.PaysDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class PaysServiceImpl implements IPaysService{

	@Autowired
	private PaysRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public PaysDto create(PaysDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, Pays.class)),
				PaysDto.class);
	}

	@Override
	public PaysDto edit(PaysDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, Pays.class)),
				PaysDto.class);
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
	public PaysDto get(Long id) {
		Optional<Pays> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), PaysDto.class);
	}

	@Override
	public List<PaysDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), PaysDto.class);
	}

	@Override
	public Page<PaysDto> getPageable(String libelle, Pageable pageable) {
		Specification<Pays> specifications = Specification.where(PaysSpecification.likeLibelle(libelle));
		Page<Pays> objects = repository.findAll(specifications, pageable);
		Page<PaysDto> dtos = utilsGeneric.mapPageToOther(objects, PaysDto.class);
		
		return dtos;
	}
}
