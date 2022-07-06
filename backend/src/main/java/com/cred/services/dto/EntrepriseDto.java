package com.cred.services.dto;

import java.time.LocalDate;

public class EntrepriseDto {
	
	private Long id;
	private String centreRC;
	private String numeroRC;
	private String raisonSociale;
	private LocalDate dateCreation;
	private Integer capitalSocial;
	private String activite;
	private Integer nombreEmployes;
	private String chainesProduction;
	private String adresse;
	private String telephone1;
	private String telephone2;
	private String telephone3;
	private String fax;
	private String email;
	private String observations;
	private Integer etatEntreprise;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCentreRC() {
		return centreRC;
	}
	public void setCentreRC(String centreRC) {
		this.centreRC = centreRC;
	}
	public String getNumeroRC() {
		return numeroRC;
	}
	public void setNumeroRC(String numeroRC) {
		this.numeroRC = numeroRC;
	}
	public String getRaisonSociale() {
		return raisonSociale;
	}
	public void setRaisonSociale(String raisonSociale) {
		this.raisonSociale = raisonSociale;
	}
	public LocalDate getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(LocalDate dateCreation) {
		this.dateCreation = dateCreation;
	}
	public Integer getCapitalSocial() {
		return capitalSocial;
	}
	public void setCapitalSocial(Integer capitalSocial) {
		this.capitalSocial = capitalSocial;
	}
	public String getActivite() {
		return activite;
	}
	public void setActivite(String activite) {
		this.activite = activite;
	}
	public Integer getNombreEmployes() {
		return nombreEmployes;
	}
	public void setNombreEmployes(Integer nombreEmployes) {
		this.nombreEmployes = nombreEmployes;
	}
	public String getChainesProduction() {
		return chainesProduction;
	}
	public void setChainesProduction(String chainesProduction) {
		this.chainesProduction = chainesProduction;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getTelephone1() {
		return telephone1;
	}
	public void setTelephone1(String telephone1) {
		this.telephone1 = telephone1;
	}
	public String getTelephone2() {
		return telephone2;
	}
	public void setTelephone2(String telephone2) {
		this.telephone2 = telephone2;
	}
	public String getTelephone3() {
		return telephone3;
	}
	public void setTelephone3(String telephone3) {
		this.telephone3 = telephone3;
	}
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getObservations() {
		return observations;
	}
	public void setObservations(String observations) {
		this.observations = observations;
	}
	public Integer getEtatEntreprise() {
		return etatEntreprise;
	}
	public void setEtatEntreprise(Integer etatEntreprise) {
		this.etatEntreprise = etatEntreprise;
	}
	@Override
	public String toString() {
		return "EntrepriseDto [id=" + id + ", centreRC=" + centreRC + ", numeroRC=" + numeroRC + ", raisonSociale="
				+ raisonSociale + ", dateCreation=" + dateCreation + ", capitalSocial=" + capitalSocial + ", activite="
				+ activite + ", nombreEmployes=" + nombreEmployes + ", chainesProduction=" + chainesProduction
				+ ", adresse=" + adresse + ", telephone1=" + telephone1 + ", telephone2=" + telephone2 + ", telephone3="
				+ telephone3 + ", fax=" + fax + ", email=" + email + ", observations=" + observations
				+ ", etatEntreprise=" + etatEntreprise + "]";
	}
	
	
	

}
