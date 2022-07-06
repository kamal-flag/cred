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

import com.cred.services.IEntrepriseService;
import com.cred.services.dto.EntrepriseDto;

@RestController
@RequestMapping("/entreprise")
public class EntrepriseController {

	@Autowired
	IEntrepriseService service;
	
	@PostMapping
	public ResponseEntity<EntrepriseDto> create(@Valid @RequestBody EntrepriseDto dto) {

		return new ResponseEntity<>(service.create(dto),HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<EntrepriseDto> update(@Valid @RequestBody EntrepriseDto dto) {

		return new ResponseEntity<>(service.edit(dto),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EntrepriseDto> get(@PathVariable Long id)  {

		return new ResponseEntity<>(service.get(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws Exception {
		service.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<EntrepriseDto>> getAll() {
	    List<EntrepriseDto> objects = service.getAll();
	    
	    return ResponseEntity.ok().body(objects);
	}
	
	@GetMapping("")
	public ResponseEntity<Map<String, Object>> getPageable(
			@RequestParam(name="centreRC", required = false) String centreRC, 
			@RequestParam(name="numeroRC", required = false) String numeroRC, 
			@RequestParam(name="raisonSociale", required = false) String raisonSociale, 
			@RequestParam(name="etatEntreprise", required = false) Integer etatEntreprise, 
			Pageable pageable) {
		
	//public ResponseEntity<Map<String, Object>> getPageable(Pageable pageable) {
	    //Page<EntrepriseDto> objects = service.getPageable(pageable);
	    Page<EntrepriseDto> objects = service.getPageable(centreRC, numeroRC, raisonSociale, etatEntreprise, pageable);

	    HashMap<String, Object> map = new HashMap<String, Object>();
	    
	    map.put("x-total", objects.getTotalElements());
	    map.put("objects", objects.getContent());
	    
	    return ResponseEntity.ok().body(map);
	}
}
