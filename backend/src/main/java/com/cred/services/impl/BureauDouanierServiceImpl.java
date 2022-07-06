package com.cred.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cred.entities.Assurance;
import com.cred.entities.BureauDouanier;
import com.cred.entities.Entreprise;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.BureauDouanierRepository;
import com.cred.repositories.EntrepriseRepository;
import com.cred.repositories.specifications.AssuranceSpecification;
import com.cred.repositories.specifications.BureauDouanierSpecification;
import com.cred.services.IBureauDouanierService;
import com.cred.services.dto.BureauDouanierDto;
import com.cred.services.dto.EntrepriseDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class BureauDouanierServiceImpl implements IBureauDouanierService{

	@Autowired
	private BureauDouanierRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public BureauDouanierDto create(BureauDouanierDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, BureauDouanier.class)),
				BureauDouanierDto.class);
	}

	@Override
	public BureauDouanierDto edit(BureauDouanierDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, BureauDouanier.class)),
				BureauDouanierDto.class);
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
	public BureauDouanierDto get(Long id) {
		Optional<BureauDouanier> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), BureauDouanierDto.class);
	}

	@Override
	public List<BureauDouanierDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), BureauDouanierDto.class);
	}

	@Override
	public Page<BureauDouanierDto> getPageable(String libelle, Pageable pageable) {
		Specification<BureauDouanier> specifications = Specification.where(BureauDouanierSpecification.likeLibelle(libelle));
		Page<BureauDouanier> objects = repository.findAll(specifications, pageable);
		Page<BureauDouanierDto> dtos = utilsGeneric.mapPageToOther(objects, BureauDouanierDto.class);
		
		return dtos;
	}
}
