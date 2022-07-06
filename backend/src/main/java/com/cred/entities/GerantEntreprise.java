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
@Table(name = "gerant_entreprise")
public class GerantEntreprise implements Serializable{
	
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
    private Entreprise entreprise;
	
	@ManyToOne
    private AssocieGerant associeGerant;
	
	@Column(name = "observations")
	private String observations;

}
