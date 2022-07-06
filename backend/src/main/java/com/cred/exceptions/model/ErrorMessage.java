package com.cred.exceptions.model;

import java.time.LocalDateTime;

public class ErrorMessage {

	private String message;
	private LocalDateTime dateNow;

    public ErrorMessage(String message, LocalDateTime dateNow) {
        this.message = message;
        this.dateNow = dateNow;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

	public LocalDateTime getDateNow() {
		return dateNow;
	}

	public void setDateNow(LocalDateTime dateNow) {
		this.dateNow = dateNow;
	}
    
    
}
