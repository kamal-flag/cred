package com.cred.exceptions.messages.users;

public enum MessageErrorUser {

	BAD_CREDENTIALS("email ou mot de pass incorrecte"),
	USER_EXIST("cette email existe déja"),
	USER_NO_EXIST("l'utilisateur n'existe pas"),
	INCORRECT_OLD_PASSWORD("ancien mot de passe incorrecte"),
	NOT_AUTHORIZED("vous devez d'abord vous connectez");
	
	
	private String message;

	private MessageErrorUser(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
