package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.cred.services.dto.DonneeComptableDto;

public interface IDonneeComptableService {

	DonneeComptableDto create(DonneeComptableDto dto);
	DonneeComptableDto edit(DonneeComptableDto dto);
	void delete(Long id) throws Exception;
	DonneeComptableDto get(Long id) ;
	List<DonneeComptableDto> getAll();
	Page<DonneeComptableDto> getPageable(Pageable pageable);
	Page<DonneeComptableDto> getPageable(Long entrepriseId, Pageable pageable);
}
