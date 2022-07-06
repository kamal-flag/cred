package com.cred.services.dto;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import com.cred.entities.DocumentCaution;
import com.cred.entities.DonneurOrdre;

public class CautionDto {
	
	private Long id;
	private String numeroArrivee;
	private LocalDate dateArrivee;
	private Integer typeCaution;
	private String numeroDossier;
	private String observations;
	private EntrepriseDto entreprise;
	private Set<DonneurOrdreDto> donneurOrdres = new HashSet<>();
	private Set<DocumentCautionDto> documents = new HashSet<>();
	
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
	
	public EntrepriseDto getEntreprise() {
		return entreprise;
	}
	public void setEntreprise(EntrepriseDto entreprise) {
		this.entreprise = entreprise;
	}
	
	public Set<DonneurOrdreDto> getDonneurOrdres() {
		return donneurOrdres;
	}
	public void setDonneurOrdres(Set<DonneurOrdreDto> donneurOrdres) {
		this.donneurOrdres = donneurOrdres;
	}
	
	public Set<DocumentCautionDto> getDocuments() {
		return documents;
	}
	public void setDocuments(Set<DocumentCautionDto> documents) {
		this.documents = documents;
	}
	@Override
	public String toString() {
		return "CautionDto [id=" + id + ", numeroArrivee=" + numeroArrivee + ", dateArrivee=" + dateArrivee
				+ ", typeCaution=" + typeCaution + ", numeroDossier=" + numeroDossier + ", observations=" + observations
				+ "]";
	}
	
	

}
