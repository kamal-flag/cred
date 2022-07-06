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
import org.springframework.web.bind.annotation.RestController;

import com.cred.services.IDocumentCautionService;
import com.cred.services.IDonneurOrdreService;
import com.cred.services.IPaysService;
import com.cred.services.dto.DocumentCautionDto;
import com.cred.services.dto.DonneurOrdreDto;
import com.cred.services.dto.PaysDto;

@RestController
@RequestMapping("/documentCaution")
public class DocumentCautionController {

	@Autowired
	IDocumentCautionService service;
	
	@PostMapping
	public ResponseEntity<DocumentCautionDto> create(@Valid @RequestBody DocumentCautionDto dto) {

		return new ResponseEntity<>(service.create(dto),HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<DocumentCautionDto> update(@Valid @RequestBody DocumentCautionDto dto) {

		return new ResponseEntity<>(service.edit(dto),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<DocumentCautionDto> get(@PathVariable Long id)  {

		return new ResponseEntity<>(service.get(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws Exception {
		service.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<DocumentCautionDto>> getAll() {
	    List<DocumentCautionDto> objects = service.getAll();
	    
	    return ResponseEntity.ok().body(objects);
	}
	
	@GetMapping("")
	public ResponseEntity<Map<String, Object>> getPageable(Pageable pageable) {
	    Page<DocumentCautionDto> objects = service.getPageable(pageable);

	    HashMap<String, Object> map = new HashMap<String, Object>();
	    
	    map.put("x-total", objects.getTotalElements());
	    map.put("objects", objects.getContent());
	    
	    return ResponseEntity.ok().body(map);
	}
}
