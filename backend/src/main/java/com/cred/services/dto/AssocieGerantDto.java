package com.cred.services.dto;

import java.time.LocalDate;

public class AssocieGerantDto {

	private Long id;
	private Integer typePersonne;
	private Boolean mineur;
	private Integer typeIdentifiant;
	private String identifiant;
	private String adresse;
	private String observations;
	private String nom;
	private String prenom;
	private LocalDate dateNaissance;
	private Boolean residence;
	private Boolean habilite;
	private String raisonSociale;
	private PaysDto pays;
	
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
	
	public PaysDto getPays() {
		return pays;
	}
	public void setPays(PaysDto pays) {
		this.pays = pays;
	}
	
	@Override
	public String toString() {
		return "AssocieGerantDto [id=" + id + ", typePersonne=" + typePersonne + ", mineur=" + mineur
				+ ", typeIdentifiant=" + typeIdentifiant + ", identifiant=" + identifiant + ", adresse=" + adresse
				+ ", observations=" + observations + ", nom=" + nom + ", prenom=" + prenom + ", dateNaissance="
				+ dateNaissance + ", residence=" + residence + ", habilite=" + habilite + ", raisonSociale="
				+ raisonSociale + "]";
	}
	
	
	
	
}
