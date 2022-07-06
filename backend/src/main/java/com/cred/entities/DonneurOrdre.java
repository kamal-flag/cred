package com.cred.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "donneur_ordre")
public class DonneurOrdre implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name = "raison_sociale")
	private String raisonSociale;
	
	@Column(name = "activite")
	private String activite;
	
	@Column(name = "agree")
	private Boolean agree;
	
	@Column(name = "observations")
	private String observations;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "donneursOrdre", allowSetters = true)
    private Pays pays;

	
	@ManyToMany(mappedBy = "donneurOrdres")
    @JsonIgnore
    private Set<Caution> cautions = new HashSet<>();
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRaisonSociale() {
		return raisonSociale;
	}

	public void setRaisonSociale(String raisonSociale) {
		this.raisonSociale = raisonSociale;
	}

	public String getActivite() {
		return activite;
	}

	public void setActivite(String activite) {
		this.activite = activite;
	}

	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

	public Pays getPays() {
		return pays;
	}

	public void setPays(Pays pays) {
		this.pays = pays;
	}

	public Boolean getAgree() {
		return agree;
	}

	public void setAgree(Boolean agree) {
		this.agree = agree;
	}

	public Set<Caution> getCautions() {
		return cautions;
	}

	public void setCautions(Set<Caution> cautions) {
		this.cautions = cautions;
	}
	
	
	
}
