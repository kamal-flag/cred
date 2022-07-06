package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.cred.services.dto.CautionDto;

public interface ICautionService {

	CautionDto create(CautionDto dto);
	CautionDto edit(CautionDto dto);
	void delete(Long id) throws Exception;
	CautionDto get(Long id) ;
	List<CautionDto> getAll();
	Page<CautionDto> getPageable(Pageable pageable);
	Page<CautionDto> getPageable(Long entrepriseId, String numeroArrivee, Pageable pageable);
}
