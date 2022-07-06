package com.cred.controllers;

import java.util.HashMap;
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

import com.cred.services.IEntrepriseAssocieGerantService;
import com.cred.services.dto.EntrepriseAssocieGerantDto;

@RestController
@RequestMapping("/entrepriseAssocie")
public class EntrepriseAssocieGerantController {

	@Autowired
	IEntrepriseAssocieGerantService service;
	
	@PostMapping
	public ResponseEntity<EntrepriseAssocieGerantDto> create(@Valid @RequestBody EntrepriseAssocieGerantDto dto) {

		return new ResponseEntity<>(service.create(dto),HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<EntrepriseAssocieGerantDto> update(@Valid @RequestBody EntrepriseAssocieGerantDto dto) {

		return new ResponseEntity<>(service.edit(dto),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EntrepriseAssocieGerantDto> get(@PathVariable Long id)  {

		return new ResponseEntity<>(service.get(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws Exception {
		service.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<Map<String, Object>> getPageable(@RequestParam(name="entrepriseId", required = false) Long entrepriseId, @RequestParam(name="identifiant", required = false) String identifiant, Pageable pageable) {
	
		
		Page<EntrepriseAssocieGerantDto> objects = service.getPageable(entrepriseId, identifiant, pageable);
	    HashMap<String, Object> map = new HashMap<String, Object>();
	    map.put("x-total", objects.getTotalElements());
	    map.put("objects", objects.getContent());
	    
	    return ResponseEntity.ok().body(map);
	}
}
