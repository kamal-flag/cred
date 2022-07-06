package com.cred.exceptions.messages.general;

public enum MessageErrorGeneral {

	INFORMATIONS_SAISIES_INCORRECTES("les informations saisies sont incorrectes"),
	ELEMENT_INEXISTANT("ce élement n'existe pas"),
	SUPPRESSION_IMPOSSIBLE("suppression impossible");
	
	private String message;

	private MessageErrorGeneral(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
