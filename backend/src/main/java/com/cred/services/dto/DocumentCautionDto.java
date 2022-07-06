package com.cred.services.dto;

public class DocumentCautionDto {

	private Long id;
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
		return "DocumentCautionDto [id=" + id + ", libelle=" + libelle + "]";
	}
	
	
	
}
