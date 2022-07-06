package com.cred.services.dto;

public class DonneurOrdreDto {
	
	private Long id;
	private String raisonSociale;
	private String activite;
	private Boolean agree;
	private String observations;
	private PaysDto pays;
	
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
	
	public PaysDto getPays() {
		return pays;
	}
	public void setPays(PaysDto pays) {
		this.pays = pays;
	}
	
	public Boolean getAgree() {
		return agree;
	}
	public void setAgree(Boolean agree) {
		this.agree = agree;
	}
	@Override
	public String toString() {
		return "DonneurOrdreDto [id=" + id + ", raisonSociale=" + raisonSociale + ", activite=" + activite
				+ ", observations=" + observations + "]";
	}
	
	

}
