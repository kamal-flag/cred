package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.cred.services.dto.PaysDto;

public interface IPaysService {

	PaysDto create(PaysDto dto);
	PaysDto edit(PaysDto dto);
	void delete(Long id) throws Exception;
	PaysDto get(Long id) ;
	List<PaysDto> getAll();
	Page<PaysDto> getPageable(String libelle, Pageable pageable);
}
