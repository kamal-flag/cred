package com.cred.controllers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cred.services.IAssuranceService;
import com.cred.services.dto.AssuranceDto;


@RestController
@RequestMapping("/assurance")
public class AssuranceController {

	@Autowired
	IAssuranceService assuranceService;
	
	@PostMapping
	public ResponseEntity<AssuranceDto> create(@Valid @RequestBody AssuranceDto assuranceDto) {

		return new ResponseEntity<>(assuranceService.create(assuranceDto),HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<AssuranceDto> update(@Valid @RequestBody AssuranceDto assuranceDto) {

		return new ResponseEntity<>(assuranceService.edit(assuranceDto),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<AssuranceDto> get(@PathVariable Long id)  {

		return new ResponseEntity<>(assuranceService.getAssurance(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws Exception {
		assuranceService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<AssuranceDto>> getAll() {
	    List<AssuranceDto> objects = assuranceService.getAllAssurance();
	    
	    return ResponseEntity.ok().body(objects);
	}
	
	@GetMapping("")
	public ResponseEntity<Map<String, Object>> getAssurancesPageable(@RequestParam(name="libelle", required = false) String libelle, Pageable pageable) {
	    Page<AssuranceDto> assurances = assuranceService.getAssurancesPageable(libelle, pageable);
	    
	    /*HttpHeaders headers = new HttpHeaders();
	    headers.add("x-header-total", Long.toString(assurances.getTotalElements()));*/
	    
	    HashMap<String, Object> map = new HashMap<String, Object>();
	    
	    map.put("x-total", assurances.getTotalElements());
	    map.put("objects", assurances.getContent());
	    
	    //HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), dossiersRejetes);
	    return ResponseEntity.ok().body(map);
	}
}
