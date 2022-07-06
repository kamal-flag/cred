package com.cred.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.cred.entities.DocumentCaution;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.repositories.DocumentCautionRepository;
import com.cred.services.IDocumentCautionService;
import com.cred.services.dto.DocumentCautionDto;
import com.cred.utils.IUtilsGeneric;

@Service
public class DocumentCautionServiceImpl implements IDocumentCautionService{

	@Autowired
	private DocumentCautionRepository repository;

	@Autowired
	private IUtilsGeneric utilsGeneric;
	
	@Override
	public DocumentCautionDto create(DocumentCautionDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, DocumentCaution.class)),
				DocumentCautionDto.class);
	}

	@Override
	public DocumentCautionDto edit(DocumentCautionDto dto) {
		return utilsGeneric.map(repository.save(utilsGeneric.map(dto, DocumentCaution.class)),
				DocumentCautionDto.class);
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
	public DocumentCautionDto get(Long id) {
		Optional<DocumentCaution> object = repository.findById(id);
		if(object.isEmpty()) {
			throw new NotFoundException(MessageErrorGeneral.ELEMENT_INEXISTANT.getMessage());
		}
		return utilsGeneric.map(object.get(), DocumentCautionDto.class);
	}

	@Override
	public List<DocumentCautionDto> getAll() {
		return utilsGeneric.mapListToOther(repository.findAll(), DocumentCautionDto.class);
	}

	@Override
	public Page<DocumentCautionDto> getPageable(Pageable pageable) {
		Page<DocumentCaution> objects = repository.findAll(pageable);
		Page<DocumentCautionDto> dtos = utilsGeneric.mapPageToOther(objects, DocumentCautionDto.class);
		
		return dtos;
	}
}
