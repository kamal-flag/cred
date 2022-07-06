package com.cred.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "caution")
public class Caution implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "numero_arrivee")
	private String numeroArrivee;
	
	@Column(name = "date_arrivee")
	private LocalDate dateArrivee;
	
	@Column(name = "type_caution")
	private Integer typeCaution;
	
	@Column(name = "numero_dossier")
	private String numeroDossier;
	
	@Column(name = "observations")
	private String observations;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "cautions", allowSetters = true)
    private Entreprise entreprise;
	
	
	@ManyToMany
    @JoinTable(name = "caution_donneur_ordre",
               joinColumns = @JoinColumn(name = "caution_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "donneur_ordre_id", referencedColumnName = "id"))
    private Set<DonneurOrdre> donneurOrdres = new HashSet<>();
	
	@ManyToMany
    @JoinTable(name = "caution_documents",
               joinColumns = @JoinColumn(name = "caution_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "document_id", referencedColumnName = "id"))
    private Set<DocumentCaution> documents = new HashSet<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumeroArrivee() {
		return numeroArrivee;
	}

	public void setNumeroArrivee(String numeroArrivee) {
		this.numeroArrivee = numeroArrivee;
	}

	public LocalDate getDateArrivee() {
		return dateArrivee;
	}

	public void setDateArrivee(LocalDate dateArrivee) {
		this.dateArrivee = dateArrivee;
	}

	public Integer getTypeCaution() {
		return typeCaution;
	}

	public void setTypeCaution(Integer typeCaution) {
		this.typeCaution = typeCaution;
	}

	public String getNumeroDossier() {
		return numeroDossier;
	}

	public void setNumeroDossier(String numeroDossier) {
		this.numeroDossier = numeroDossier;
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

	public Set<DonneurOrdre> getDonneurOrdres() {
		return donneurOrdres;
	}

	public void setDonneurOrdres(Set<DonneurOrdre> donneurOrdres) {
		this.donneurOrdres = donneurOrdres;
	}

	public Set<DocumentCaution> getDocuments() {
		return documents;
	}

	public void setDocuments(Set<DocumentCaution> documents) {
		this.documents = documents;
	}
	
	
}
