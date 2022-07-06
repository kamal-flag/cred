package com.cred.services.dto;

import java.time.LocalDate;

public class PvDto {

	private Long id;
	private LocalDate datePV;
	private String activitePV;
	private LocalDate dateActivite;
	private String materielNeuf;
	private String materielUsager;
	private Boolean materielImporte;
	private Boolean materielAcquis;
	private Integer nombreEmployes;
	private String chainesProduction;
	private String observations;
	private EntrepriseDto entreprise;
	private BureauDouanierDto bureauDouanier;
	

	
	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public LocalDate getDatePV() {
		return datePV;
	}



	public void setDatePV(LocalDate datePV) {
		this.datePV = datePV;
	}



	public String getActivitePV() {
		return activitePV;
	}



	public void setActivitePV(String activitePV) {
		this.activitePV = activitePV;
	}



	public LocalDate getDateActivite() {
		return dateActivite;
	}



	public void setDateActivite(LocalDate dateActivite) {
		this.dateActivite = dateActivite;
	}



	public String getMaterielNeuf() {
		return materielNeuf;
	}



	public void setMaterielNeuf(String materielNeuf) {
		this.materielNeuf = materielNeuf;
	}



	public String getMaterielUsager() {
		return materielUsager;
	}



	public void setMaterielUsager(String materielUsager) {
		this.materielUsager = materielUsager;
	}



	public Boolean getMaterielImporte() {
		return materielImporte;
	}



	public void setMaterielImporte(Boolean materielImporte) {
		this.materielImporte = materielImporte;
	}



	public Boolean getMaterielAcquis() {
		return materielAcquis;
	}



	public void setMaterielAcquis(Boolean materielAcquis) {
		this.materielAcquis = materielAcquis;
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



	public BureauDouanierDto getBureauDouanier() {
		return bureauDouanier;
	}



	public void setBureauDouanier(BureauDouanierDto bureauDouanier) {
		this.bureauDouanier = bureauDouanier;
	}



	@Override
	public String toString() {
		return "PvDto [id=" + id + ", datePV=" + datePV + ", activitePV=" + activitePV + ", dateActivite="
				+ dateActivite + ", materielNeuf=" + materielNeuf + ", materielUsager=" + materielUsager
				+ ", materielImporte=" + materielImporte + ", materielAcquis=" + materielAcquis + ", nombreEmployes="
				+ nombreEmployes + ", chainesProduction=" + chainesProduction + ", observations=" + observations + "]";
	}
	
	
	
}
