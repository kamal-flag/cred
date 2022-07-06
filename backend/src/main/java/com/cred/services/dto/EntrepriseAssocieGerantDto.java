package com.cred.services.dto;

public class EntrepriseAssocieGerantDto {

	private Long id;
	private Boolean associe;
	private Boolean gerant;
	private Boolean habilite;
	private String observations;
	private EntrepriseDto entreprise;
	private AssocieGerantDto associeGerant;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public EntrepriseDto getEntreprise() {
		return entreprise;
	}
	public void setEntreprise(EntrepriseDto entreprise) {
		this.entreprise = entreprise;
	}
	public Boolean getAssocie() {
		return associe;
	}
	public void setAssocie(Boolean associe) {
		this.associe = associe;
	}
	public Boolean getGerant() {
		return gerant;
	}
	public void setGerant(Boolean gerant) {
		this.gerant = gerant;
	}
	public Boolean getHabilite() {
		return habilite;
	}
	public void setHabilite(Boolean habilite) {
		this.habilite = habilite;
	}
	public String getObservations() {
		return observations;
	}
	public void setObservations(String observations) {
		this.observations = observations;
	}
	public AssocieGerantDto getAssocieGerant() {
		return associeGerant;
	}
	public void setAssocieGerant(AssocieGerantDto associeGerant) {
		this.associeGerant = associeGerant;
	}
	

}
