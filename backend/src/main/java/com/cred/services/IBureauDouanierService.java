package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.cred.services.dto.BureauDouanierDto;

public interface IBureauDouanierService {

	BureauDouanierDto create(BureauDouanierDto dto);
	BureauDouanierDto edit(BureauDouanierDto dto);
	void delete(Long id) throws Exception;
	BureauDouanierDto get(Long id) ;
	List<BureauDouanierDto> getAll();
	Page<BureauDouanierDto> getPageable(String libelle, Pageable pageable);
}
