package com.cred.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import com.cred.entities.DonneurOrdre;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.DonneurOrdreRepository;
import com.cred.repositories.specifications.DonneurOrdreSpecification;
import com.cred.services.IDonneurOrdreService;
import com.cred.services.dto.DonneurOrdreDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class DonneurOrdreServiceImpl implements IDonneurOrdreService{

	@Autowired
	private DonneurOrdreRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public DonneurOrdreDto create(DonneurOrdreDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, DonneurOrdre.class)),
				DonneurOrdreDto.class);
	}

	@Override
	public DonneurOrdreDto edit(DonneurOrdreDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, DonneurOrdre.class)),
				DonneurOrdreDto.class);
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
	public DonneurOrdreDto get(Long id) {
		Optional<DonneurOrdre> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), DonneurOrdreDto.class);
	}

	@Override
	public List<DonneurOrdreDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), DonneurOrdreDto.class);
	}

	@Override
	public Page<DonneurOrdreDto> getPageable(String rc, Pageable pageable) {
		Specification<DonneurOrdre> specifications = Specification.where(DonneurOrdreSpecification.likeRaisonSocial(rc));
		Page<DonneurOrdre> objects = repository.findAll(specifications, pageable);
		Page<DonneurOrdreDto> dtos = utilsGeneric.mapPageToOther(objects, DonneurOrdreDto.class);
		
		return dtos;
	}
}
