package com.cred.services.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class AssuranceDto {
	
	private Long id;
	
	@NotBlank(message = "le nom de l'assurance ne doit pas être vide")
	@Size(max = 40, message = "le nom de l'assurance ne doit pas dépasser 40 caractères")
	private String libelle;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	
	@Override
	public String toString() {
		return "AssuranceDto [id=" + id + ", libelle=" + libelle + "]";
	}
	
	

}
