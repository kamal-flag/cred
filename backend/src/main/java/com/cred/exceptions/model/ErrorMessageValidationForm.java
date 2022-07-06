package com.cred.exceptions.model;

import java.time.LocalDateTime;
import java.util.Map;

public class ErrorMessageValidationForm {

	private String message;
	private LocalDateTime dateNow;
	private Map<String, String> errorFields;

    public ErrorMessageValidationForm(String message, LocalDateTime dateNow, Map<String, String> errorFields) {
        this.message = message;
        this.dateNow = dateNow;
        this.errorFields = errorFields;
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

	public Map<String, String> getErrorFields() {
		return errorFields;
	}

	public void setErrorFields(Map<String, String> errorFields) {
		this.errorFields = errorFields;
	}
	
	
}
