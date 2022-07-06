package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.cred.services.dto.EntrepriseAssocieGerantDto;

public interface IEntrepriseAssocieGerantService {

	EntrepriseAssocieGerantDto create(EntrepriseAssocieGerantDto dto);
	EntrepriseAssocieGerantDto edit(EntrepriseAssocieGerantDto dto);
	void delete(Long id) throws Exception;
	EntrepriseAssocieGerantDto get(Long id) ;
	List<EntrepriseAssocieGerantDto> getAll();
	Page<EntrepriseAssocieGerantDto> getPageable(Pageable pageable);
	Page<EntrepriseAssocieGerantDto> getPageable(Long entrepriseId, String identifiant, Pageable pageable);
}
