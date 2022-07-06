package com.cred.services.requests;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UserRequest {

	/*
	 * @NotBlank(message = "the field must not be null !!!")
	 * 
	 * @Size(min = 3,message = "the field must have at least 3 characters !! ")
	 */
	private String nom;

	/*
	 * @NotBlank(message = "the field must not be null !!!")
	 * 
	 * @Size(min = 3,message = "the field must have at least 3 characters !! ")
	 */
	private String prenom;

	/*
	 * @NotBlank(message = "the field must not be null !!!")
	 * 
	 * @Size(min = 3,message = "the field must have at least 3 characters !! ")
	 */
	private String fonction;

	/*
	 * @Email(message = "the field must respect the email format !!")
	 * 
	 * @NotBlank(message = "the field must not be null !!!")
	 */
	private String email;

	/*
	 * @NotBlank(message = "the field must not be null !!!")
	 * 
	 * @Size(min = 8,max = 12,message =
	 * "the field must have at least between 8 and 12 characters !! ")
	 * 
	 * @Pattern(regexp =
	 * "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
	 * message =
	 * "this password must have upper and lower case letters and numbers !! ")
	 */
	private String password;

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getFonction() {
		return fonction;
	}

	public void setFonction(String fonction) {
		this.fonction = fonction;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserRequest [nom=" + nom + ", prenom=" + prenom + ", fonction=" + fonction + ", email=" + email
				+ ", password=" + password + "]";
	}
	
	

}
