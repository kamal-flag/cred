package com.cred.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "fiche_synoptique")
public class FicheSynoptique implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "libelle")
	private String libelle;
	
	@Column(name = "date_generation")
	private LocalDate dateGeneration;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "fichesSynoptique", allowSetters = true)
    private Entreprise entreprise;

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

	public Entreprise getEntreprise() {
		return entreprise;
	}

	public void setEntreprise(Entreprise entreprise) {
		this.entreprise = entreprise;
	}
	
	
}
