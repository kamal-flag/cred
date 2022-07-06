package com.cred.services.dto;

import java.time.LocalDate;

public class FicheSynoptiqueDto {
	
	private Long id;
	private String libelle;
	private LocalDate dateGeneration;
	private EntrepriseDto entreprise;
	
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
	public LocalDate getDateGeneration() {
		return dateGeneration;
	}
	public void setDateGeneration(LocalDate dateGeneration) {
		this.dateGeneration = dateGeneration;
	}
	
	public EntrepriseDto getEntreprise() {
		return entreprise;
	}
	public void setEntreprise(EntrepriseDto entreprise) {
		this.entreprise = entreprise;
	}
	
	@Override
	public String toString() {
		return "FicheSynoptiqueDto [id=" + id + ", libelle=" + libelle + ", dateGeneration=" + dateGeneration + "]";
	}
	
	

}
