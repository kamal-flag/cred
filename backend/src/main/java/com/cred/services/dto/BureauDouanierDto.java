package com.cred.services.dto;

public class BureauDouanierDto {

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
		return "BureauDouanierDto [id=" + id + ", libelle=" + libelle + "]";
	}
	
}
