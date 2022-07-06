package com.cred.services.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import com.cred.entities.Pv;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.PvRepository;
import com.cred.repositories.specifications.EntrepriseSpecification;
import com.cred.repositories.specifications.PvSpecification;
import com.cred.services.IPvService;
import com.cred.services.dto.PvDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class PvServiceImpl implements IPvService{

	@Autowired
	private PvRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public PvDto create(PvDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, Pv.class)),
				PvDto.class);
	}

	@Override
	public PvDto edit(PvDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, Pv.class)),
				PvDto.class);
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
	public PvDto get(Long id) {
		Optional<Pv> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), PvDto.class);
	}

	@Override
	public List<PvDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), PvDto.class);
	}

	@Override
	public Page<PvDto> getPageable(Pageable pageable) {
		Page<Pv> objects = repository.findAll(pageable);
		Page<PvDto> dtos = utilsGeneric.mapPageToOther(objects, PvDto.class);
		
		return dtos;
	}
	
	@Override
	public Page<PvDto> getPageable(Long entrepriseId, String activite, Pageable pageable) {
		Specification<Pv> specifications = Specification.where(PvSpecification.equalEntreprise(entrepriseId))
				.and(PvSpecification.likeActivite(activite));
		//Page<Pv> objects = repository.findAll(pageable);
		Page<Pv> objects = repository.findAll(specifications, pageable);
		Page<PvDto> dtos = utilsGeneric.mapPageToOther(objects, PvDto.class);
		
		return dtos;
	}

}
