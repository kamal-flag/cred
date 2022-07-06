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
@Table(name = "pv")
public class Pv implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "date_pv")
	private LocalDate datePV;
	
	@Column(name = "activite_pv")
	private String activitePV;
	
	@Column(name = "date_activite")
	private LocalDate dateActivite;
	
	@Column(name = "materiel_neuf")
	private String materielNeuf;
	
	@Column(name = "materiel_usager")
	private String materielUsager;
	
	@Column(name = "materiel_importe")
	private Boolean materielImporte;
	
	@Column(name = "materiel_acquis")
	private Boolean materielAcquis;
	
	@Column(name = "nombre_employes")
	private Integer nombreEmployes;
	
	@Column(name = "chaines_production")
	private String chainesProduction;
	
	@Column(name = "observations")
	private String observations;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "pvs", allowSetters = true)
    private Entreprise entreprise;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "pvs", allowSetters = true)
    private BureauDouanier bureauDouanier;

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

	public Entreprise getEntreprise() {
		return entreprise;
	}

	public void setEntreprise(Entreprise entreprise) {
		this.entreprise = entreprise;
	}

	public BureauDouanier getBureauDouanier() {
		return bureauDouanier;
	}

	public void setBureauDouanier(BureauDouanier bureauDouanier) {
		this.bureauDouanier = bureauDouanier;
	}


}
