package com.cred.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "entreprise_associe_gerant")
public class EntrepriseAssocieGerant implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "associe")
	private Boolean associe;
	
	@Column(name = "gerant")
	private Boolean gerant;
	
	@Column(name = "habilite")
	private Boolean habilite;
	
	@Column(name = "observations")
	private String observations;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "entrepriseAssocieGerant", allowSetters = true)
    private Entreprise entreprise;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "entrepriseAssocieGerant", allowSetters = true)
    private AssocieGerant associeGerant;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Entreprise getEntreprise() {
		return entreprise;
	}

	public void setEntreprise(Entreprise entreprise) {
		this.entreprise = entreprise;
	}

	public AssocieGerant getAssocieGerant() {
		return associeGerant;
	}

	public void setAssocieGerant(AssocieGerant associeGerant) {
		this.associeGerant = associeGerant;
	}
	
	
}
