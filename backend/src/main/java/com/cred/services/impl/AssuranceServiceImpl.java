package com.cred.services.impl;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cred.entities.Assurance;


import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.assurance.MessageErrorAssurance;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.AssuranceRepository;
import com.cred.repositories.specifications.AssuranceSpecification;
import com.cred.services.IAssuranceService;
import com.cred.services.dto.AssuranceDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class AssuranceServiceImpl implements IAssuranceService {

	@Autowired
	private AssuranceRepository assuranceRepository;

	@Autowired
	private IUtilsGeneric utilsGeneric;

	@Override
	public AssuranceDto create(AssuranceDto assuranceDto) {
		return utilsGeneric.map(assuranceRepository.save(utilsGeneric.map(assuranceDto, Assurance.class)),
				AssuranceDto.class);
	}

	@Override
	public AssuranceDto edit(AssuranceDto assuranceDto) {
		return utilsGeneric.map(assuranceRepository.save(utilsGeneric.map(assuranceDto, Assurance.class)),
				AssuranceDto.class);
	}

	@Override
	public void delete(Long id) throws NotFoundException, SuppressionImpossibleException {
		if(!assuranceRepository.existsById(id)) {
			throw new NotFoundException(MessageErrorAssurance.ASSURANCE_NON_EXISTANTE.getMessage());
		}
		
		try {
			assuranceRepository.deleteById(id);
		} catch(Exception e) {
			throw new SuppressionImpossibleException(MessageErrorGeneral.SUPPRESSION_IMPOSSIBLE.getMessage());
		}
		
	}

	@Override
	public AssuranceDto getAssurance(Long id) throws NotFoundException  {
		
		Optional<Assurance> assurance = assuranceRepository.findById(id);
		if(assurance.isEmpty()) {
			throw new NotFoundException(MessageErrorAssurance.ASSURANCE_NON_EXISTANTE.getMessage());
		}
		
		return utilsGeneric.map(assurance.get(), AssuranceDto.class);
	}

	@Override
	public List<AssuranceDto> getAllAssurance() {
		return utilsGeneric.mapListToOther(assuranceRepository.findAll(), AssuranceDto.class);
	}

	@Override
	public Page<AssuranceDto> getAssurancesPageable(String libelle, Pageable pageable) {
		
		Specification<Assurance> specifications = Specification.where(AssuranceSpecification.likeLibelle(libelle));
		Page<Assurance> assurances = assuranceRepository.findAll(specifications, pageable);
		Page<AssuranceDto> assurancesDto = utilsGeneric.mapPageToOther(assurances, AssuranceDto.class);
		
		return assurancesDto;
	}

}
