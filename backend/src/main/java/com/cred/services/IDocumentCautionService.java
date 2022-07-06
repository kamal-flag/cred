package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.cred.services.dto.DocumentCautionDto;

public interface IDocumentCautionService {

	DocumentCautionDto create(DocumentCautionDto dto);
	DocumentCautionDto edit(DocumentCautionDto dto);
	void delete(Long id) throws Exception;
	DocumentCautionDto get(Long id) ;
	List<DocumentCautionDto> getAll();
	Page<DocumentCautionDto> getPageable(Pageable pageable);
}
