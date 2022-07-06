package com.cred.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "entreprise")
public class Entreprise implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "centre_rc")
	private String centreRC;

	@Column(name = "numero_rc")
	private String numeroRC;
	
	@Column(name = "raison_sociale")
	private String raisonSociale;
	
	@Column(name = "date_creation")
	private LocalDate dateCreation;
	
	@Column(name = "capital_social")
	private Integer capitalSocial;
	
	@Column(name = "activite")
	private String activite;
	
	@Column(name = "nombre_employes")
	private Integer nombreEmployes;
	
	@Column(name = "chaines_production")
	private String chainesProduction;
	
	@Column(name = "adresse")
	private String adresse;
	
	@Column(name = "telephone1")
	private String telephone1;
	
	@Column(name = "telephone2")
	private String telephone2;
	
	@Column(name = "telephone3")
	private String telephone3;
	
	@Column(name = "fax")
	private String fax;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "observations")
	private String observations;
	
	@Column(name = "etat_entreprise")
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
	
	

}
