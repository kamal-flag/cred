package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.cred.services.dto.PvDto;

public interface IPvService {

	PvDto create(PvDto dto);
	PvDto edit(PvDto dto);
	void delete(Long id) throws Exception;
	PvDto get(Long id) ;
	List<PvDto> getAll();
	Page<PvDto> getPageable(Pageable pageable);
	Page<PvDto> getPageable(Long entrepriseId, String activite, Pageable pageable);
}
