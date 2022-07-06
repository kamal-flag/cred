package com.cred.exceptions.messages.assurance;

public enum MessageErrorAssurance {

	ASSURANCE_NON_EXISTANTE("Assurance inexistante");
	
	
	private String message;

	private MessageErrorAssurance(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
