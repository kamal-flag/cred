package com.cred.exceptions;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

public interface ICustomException {

	HttpStatus getStatus();
	String getMessage();
	LocalDateTime getDateNow();
}