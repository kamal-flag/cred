package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.cred.services.dto.EntrepriseDto;

public interface IEntrepriseService {

	EntrepriseDto create(EntrepriseDto dto);
	EntrepriseDto edit(EntrepriseDto dto);
	void delete(Long id) throws Exception;
	EntrepriseDto get(Long id) ;
	List<EntrepriseDto> getAll();
	Page<EntrepriseDto> getPageable(String centreRC, String numeroRC, String raisonSociale, Integer etatEntreprise, Pageable pageable);
}
