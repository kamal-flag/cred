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

import com.cred.services.IUserService;
import com.cred.services.dto.UserDto;
import com.cred.services.dto.UserInfoDto;
import com.cred.services.requests.EditPasswordRequest;
import com.cred.services.requests.UserRequest;
import com.cred.services.responses.UserResponse;
import com.cred.utils.IUtilsGeneric;

@RestController 
@RequestMapping("/users") 
public class UserController {

	@Autowired
	IUserService userService;

	@Autowired
	private IUtilsGeneric utilsGeneric;

	@PostMapping
	public ResponseEntity<UserResponse> creatUser(@RequestBody @Valid UserRequest userRequest) {

		return new ResponseEntity<UserResponse>(utilsGeneric
				.map(userService.createUser(utilsGeneric.map(userRequest, UserDto.class)), UserResponse.class),
				HttpStatus.CREATED);
	}
	
	@GetMapping("/email")
	public ResponseEntity<UserResponse> get(UserRequest userRequest) {

		
		return new ResponseEntity<UserResponse>(utilsGeneric
				.map(userService.getUser(userRequest.getEmail()).get(), UserResponse.class),
				HttpStatus.ACCEPTED);
	}
	
	@PutMapping
	public ResponseEntity<UserInfoDto> update(@Valid @RequestBody UserDto dto) {

		return new ResponseEntity<>(userService.edit(dto),HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/editPassword")
	public ResponseEntity<UserInfoDto> editPassword(@Valid @RequestBody EditPasswordRequest dto) {

		return new ResponseEntity<>(userService.editPassword(dto),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UserInfoDto> get(@PathVariable Long id)  {

		return new ResponseEntity<>(userService.get(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws Exception {
		userService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<UserInfoDto>> getAll() {
	    List<UserInfoDto> objects = userService.getAll();
	    
	    return ResponseEntity.ok().body(objects);
	}
	
	@GetMapping("")
	public ResponseEntity<Map<String, Object>> getPageable(@RequestParam(name="nom", required = false) String nom, @RequestParam(name="prenom", required = false) String prenom, Pageable pageable) {
	    Page<UserInfoDto> objects = userService.getPageable(nom, prenom, pageable);

	    HashMap<String, Object> map = new HashMap<String, Object>();
	    
	    map.put("x-total", objects.getTotalElements());
	    map.put("objects", objects.getContent());
	    
	    return ResponseEntity.ok().body(map);
	}
}
