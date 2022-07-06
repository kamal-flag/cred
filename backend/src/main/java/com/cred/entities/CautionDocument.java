package com.cred.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "caution_document_deprecated")
public class CautionDocument implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "cautionDocument", allowSetters = true)
    private Caution caution;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "cautionDocument", allowSetters = true)
    private DocumentCaution documentCaution;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Caution getCaution() {
		return caution;
	}

	public void setCaution(Caution caution) {
		this.caution = caution;
	}

	public DocumentCaution getDocumentCaution() {
		return documentCaution;
	}

	public void setDocumentCaution(DocumentCaution documentCaution) {
		this.documentCaution = documentCaution;
	}
	
	
}
