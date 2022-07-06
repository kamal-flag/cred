package com.cred.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.cred.services.dto.AssocieGerantDto;

public interface IAssocieGerantService {

	AssocieGerantDto create(AssocieGerantDto dto);
	AssocieGerantDto edit(AssocieGerantDto dto);
	void delete(Long id) throws Exception;
	AssocieGerantDto get(Long id) ;
	List<AssocieGerantDto> getAll();
	List<AssocieGerantDto> getAllNotInEntreprise(Long entrepriseId);
	Page<AssocieGerantDto> getPageable(String identifiant, Pageable pageable);
}
