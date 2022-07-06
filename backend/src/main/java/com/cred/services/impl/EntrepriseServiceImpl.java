package com.cred.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cred.entities.Entreprise;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.EntrepriseRepository;
import com.cred.repositories.specifications.EntrepriseSpecification;
import com.cred.services.IEntrepriseService;
import com.cred.services.dto.EntrepriseDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class EntrepriseServiceImpl implements IEntrepriseService{

	@Autowired
	private EntrepriseRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public EntrepriseDto create(EntrepriseDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, Entreprise.class)),
				EntrepriseDto.class);
	}

	@Override
	public EntrepriseDto edit(EntrepriseDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, Entreprise.class)),
				EntrepriseDto.class);
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
	public EntrepriseDto get(Long id) {
		Optional<Entreprise> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), EntrepriseDto.class);
	}

	@Override
	public List<EntrepriseDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), EntrepriseDto.class);
	}

	/*@Override
	public Page<EntrepriseDto> getPageable(Pageable pageable) {
		Page<Entreprise> objects = repository.findAll(pageable);
		Page<EntrepriseDto> dtos = utilsGeneric.mapPageToOther(objects, EntrepriseDto.class);
		
		return dtos;
	}*/
	
	@Override
	public Page<EntrepriseDto> getPageable(String centreRC, String numeroRC, String raisonSociale, Integer etatEntreprise, Pageable pageable) {
		
		Specification<Entreprise> specifications = Specification.where(EntrepriseSpecification.equalCentreRC(centreRC))
				.and(EntrepriseSpecification.equalNumeroRC(numeroRC))
				.or(EntrepriseSpecification.likeRaisonSocial(raisonSociale))
				.and(EntrepriseSpecification.equalEtatEntreprise(etatEntreprise))
				;
		
		Page<Entreprise> objects = repository.findAll(specifications, pageable);
		//Page<Entreprise> objects = repository.findAll(pageable);
		Page<EntrepriseDto> dtos = utilsGeneric.mapPageToOther(objects, EntrepriseDto.class);
		
		return dtos;
	}
}
