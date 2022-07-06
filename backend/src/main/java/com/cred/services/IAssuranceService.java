package com.cred.services;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.cred.services.dto.AssuranceDto;



public interface IAssuranceService {

	AssuranceDto create(AssuranceDto assuranceDto);
	AssuranceDto edit(AssuranceDto assuranceDto);
	void delete(Long id) throws Exception;
	AssuranceDto getAssurance(Long id) ;
	List<AssuranceDto> getAllAssurance();
	Page<AssuranceDto> getAssurancesPageable(String libelle, Pageable pageable);
}
