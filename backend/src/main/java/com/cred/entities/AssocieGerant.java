package com.cred.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "associe_gerant")
public class AssocieGerant implements Serializable {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "type_personne")
	private Integer typePersonne;

	@Column(name = "mineur")
	private Boolean mineur;

	@Column(name = "type_identifiant")
	private Integer typeIdentifiant;

	@Column(name = "identifiant")
	private String identifiant;

	@Column(name = "adresse")
	private String adresse;

	@Column(name = "observations")
	private String observations;

	@Column(name = "nom")
	private String nom;

	@Column(name = "prenom")
	private String prenom;

	@Column(name = "date_naissance")
	private LocalDate dateNaissance;

	@Column(name = "residence")
	private Boolean residence;

	@Column(name = "habilite")
	private Boolean habilite;

	@Column(name = "raison_sociale")
	private String raisonSociale;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "associeGerants", allowSetters = true)
    private Pays pays;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getTypePersonne() {
		return typePersonne;
	}

	public void setTypePersonne(Integer typePersonne) {
		this.typePersonne = typePersonne;
	}

	public Boolean getMineur() {
		return mineur;
	}

	public void setMineur(Boolean mineur) {
		this.mineur = mineur;
	}

	public Integer getTypeIdentifiant() {
		return typeIdentifiant;
	}

	public void setTypeIdentifiant(Integer typeIdentifiant) {
		this.typeIdentifiant = typeIdentifiant;
	}

	public String getIdentifiant() {
		return identifiant;
	}

	public void setIdentifiant(String identifiant) {
		this.identifiant = identifiant;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

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

	public LocalDate getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(LocalDate dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public Boolean getResidence() {
		return residence;
	}

	public void setResidence(Boolean residence) {
		this.residence = residence;
	}

	public Boolean getHabilite() {
		return habilite;
	}

	public void setHabilite(Boolean habilite) {
		this.habilite = habilite;
	}

	public String getRaisonSociale() {
		return raisonSociale;
	}

	public void setRaisonSociale(String raisonSociale) {
		this.raisonSociale = raisonSociale;
	}

	public Pays getPays() {
		return pays;
	}

	public void setPays(Pays pays) {
		this.pays = pays;
	}
	
	

}
