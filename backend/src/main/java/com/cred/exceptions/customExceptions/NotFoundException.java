package com.cred.exceptions.customExceptions;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import com.cred.exceptions.ICustomException;

public class NotFoundException extends RuntimeException implements ICustomException {

	private static final long serialVersionUID = 1L;
	private LocalDateTime dateNow;
	private HttpStatus status;

	public NotFoundException(String message) {
		super(message);
		this.dateNow = LocalDateTime.now();
		this.status = HttpStatus.NOT_FOUND;
	}


	public LocalDateTime getDateNow() {
		return dateNow;
	}

	public void setDateNow(LocalDateTime dateNow) {
		this.dateNow = dateNow;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}
	
}
