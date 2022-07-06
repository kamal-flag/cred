package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.cred.services.dto.DonneurOrdreDto;

public interface IDonneurOrdreService {

	DonneurOrdreDto create(DonneurOrdreDto dto);
	DonneurOrdreDto edit(DonneurOrdreDto dto);
	void delete(Long id) throws Exception;
	DonneurOrdreDto get(Long id) ;
	List<DonneurOrdreDto> getAll();
	Page<DonneurOrdreDto> getPageable(String rc, Pageable pageable);
}
