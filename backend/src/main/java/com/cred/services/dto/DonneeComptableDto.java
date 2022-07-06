package com.cred.services.dto;

public class DonneeComptableDto {
	
	private Long id;
	private Integer annee;
	private String materielOutillage;
	private String capitauxPropres;
	private String resultatNet;
	private String chargePersonnel;
	private String achatService;
	private String chiffreAffaireTotal;
	private String chiffreAffaireExport;
	private String numeroPoliceAssurance1;
	private String nature1;
	private String numeropoliceAssurance2;
	private String nature2;
	private String montantDelegation;
	private String dettes;
	private String achatConsommable;
	private String autresCharges;
	private String subventionsExploitation;
	private String impotsTax;
	private String capitalPermanent;
	private String actifCirculant;
	private String tresoreriePassif;
	private String actifTotal;
	private String passifTotal;
	private String fraisFinanciers;
	private String stocks;
	private EntrepriseDto entreprise;
	private AssuranceDto assurance;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Integer getAnnee() {
		return annee;
	}
	public void setAnnee(Integer annee) {
		this.annee = annee;
	}
	public String getMaterielOutillage() {
		return materielOutillage;
	}
	public void setMaterielOutillage(String materielOutillage) {
		this.materielOutillage = materielOutillage;
	}
	public String getCapitauxPropres() {
		return capitauxPropres;
	}
	public void setCapitauxPropres(String capitauxPropres) {
		this.capitauxPropres = capitauxPropres;
	}
	public String getResultatNet() {
		return resultatNet;
	}
	public void setResultatNet(String resultatNet) {
		this.resultatNet = resultatNet;
	}
	public String getChargePersonnel() {
		return chargePersonnel;
	}
	public void setChargePersonnel(String chargePersonnel) {
		this.chargePersonnel = chargePersonnel;
	}
	public String getAchatService() {
		return achatService;
	}
	public void setAchatService(String achatService) {
		this.achatService = achatService;
	}
	public String getChiffreAffaireTotal() {
		return chiffreAffaireTotal;
	}
	public void setChiffreAffaireTotal(String chiffreAffaireTotal) {
		this.chiffreAffaireTotal = chiffreAffaireTotal;
	}
	public String getChiffreAffaireExport() {
		return chiffreAffaireExport;
	}
	public void setChiffreAffaireExport(String chiffreAffaireExport) {
		this.chiffreAffaireExport = chiffreAffaireExport;
	}
	public String getNumeroPoliceAssurance1() {
		return numeroPoliceAssurance1;
	}
	public void setNumeroPoliceAssurance1(String numeroPoliceAssurance1) {
		this.numeroPoliceAssurance1 = numeroPoliceAssurance1;
	}
	public String getNature1() {
		return nature1;
	}
	public void setNature1(String nature1) {
		this.nature1 = nature1;
	}
	public String getNumeropoliceAssurance2() {
		return numeropoliceAssurance2;
	}
	public void setNumeropoliceAssurance2(String numeropoliceAssurance2) {
		this.numeropoliceAssurance2 = numeropoliceAssurance2;
	}
	public String getNature2() {
		return nature2;
	}
	public void setNature2(String nature2) {
		this.nature2 = nature2;
	}
	public String getMontantDelegation() {
		return montantDelegation;
	}
	public void setMontantDelegation(String montantDelegation) {
		this.montantDelegation = montantDelegation;
	}
	public String getDettes() {
		return dettes;
	}
	public void setDettes(String dettes) {
		this.dettes = dettes;
	}
	public String getAchatConsommable() {
		return achatConsommable;
	}
	public void setAchatConsommable(String achatConsommable) {
		this.achatConsommable = achatConsommable;
	}
	public String getAutresCharges() {
		return autresCharges;
	}
	public void setAutresCharges(String autresCharges) {
		this.autresCharges = autresCharges;
	}
	public String getSubventionsExploitation() {
		return subventionsExploitation;
	}
	public void setSubventionsExploitation(String subventionsExploitation) {
		this.subventionsExploitation = subventionsExploitation;
	}
	public String getImpotsTax() {
		return impotsTax;
	}
	public void setImpotsTax(String impotsTax) {
		this.impotsTax = impotsTax;
	}
	public String getCapitalPermanent() {
		return capitalPermanent;
	}
	public void setCapitalPermanent(String capitalPermanent) {
		this.capitalPermanent = capitalPermanent;
	}
	public String getActifCirculant() {
		return actifCirculant;
	}
	public void setActifCirculant(String actifCirculant) {
		this.actifCirculant = actifCirculant;
	}
	public String getTresoreriePassif() {
		return tresoreriePassif;
	}
	public void setTresoreriePassif(String tresoreriePassif) {
		this.tresoreriePassif = tresoreriePassif;
	}
	public String getActifTotal() {
		return actifTotal;
	}
	public void setActifTotal(String actifTotal) {
		this.actifTotal = actifTotal;
	}
	public String getPassifTotal() {
		return passifTotal;
	}
	public void setPassifTotal(String passifTotal) {
		this.passifTotal = passifTotal;
	}
	public String getFraisFinanciers() {
		return fraisFinanciers;
	}
	public void setFraisFinanciers(String fraisFinanciers) {
		this.fraisFinanciers = fraisFinanciers;
	}
	public String getStocks() {
		return stocks;
	}
	public void setStocks(String stocks) {
		this.stocks = stocks;
	}
	
	public EntrepriseDto getEntreprise() {
		return entreprise;
	}
	public void setEntreprise(EntrepriseDto entreprise) {
		this.entreprise = entreprise;
	}
	
	public AssuranceDto getAssurance() {
		return assurance;
	}
	public void setAssurance(AssuranceDto assurance) {
		this.assurance = assurance;
	}
	@Override
	public String toString() {
		return "DonneeComptableDto [id=" + id + ", annee=" + annee + ", materielOutillage=" + materielOutillage
				+ ", capitauxPropres=" + capitauxPropres + ", resultatNet=" + resultatNet + ", chargePersonnel="
				+ chargePersonnel + ", achatService=" + achatService + ", chiffreAffaireTotal=" + chiffreAffaireTotal
				+ ", chiffreAffaireExport=" + chiffreAffaireExport + ", numeroPoliceAssurance1="
				+ numeroPoliceAssurance1 + ", nature1=" + nature1 + ", numeropoliceAssurance2=" + numeropoliceAssurance2
				+ ", nature2=" + nature2 + ", montantDelegation=" + montantDelegation + ", dettes=" + dettes
				+ ", achatConsommable=" + achatConsommable + ", autresCharges=" + autresCharges
				+ ", subventionsExploitation=" + subventionsExploitation + ", impotsTax=" + impotsTax
				+ ", capitalPermanent=" + capitalPermanent + ", actifCirculant=" + actifCirculant
				+ ", tresoreriePassif=" + tresoreriePassif + ", actifTotal=" + actifTotal + ", passifTotal="
				+ passifTotal + ", fraisFinanciers=" + fraisFinanciers + ", stocks=" + stocks + "]";
	}
	
	
	
}
