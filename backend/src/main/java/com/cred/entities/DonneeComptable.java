package com.cred.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "donnee_comptable")
public class DonneeComptable implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name = "annee")
	private Integer annee;
	
	@Column(name = "materiel_outillage")
	private String materielOutillage;
	
	@Column(name = "capitaux_propres")
	private String capitauxPropres;
	
	@Column(name = "resultat_net")
	private String resultatNet;
	
	@Column(name = "charge_personnel")
	private String chargePersonnel;
	
	@Column(name = "achat_service")
	private String achatService;
	
	@Column(name = "chiffre_affaire_total")
	private String chiffreAffaireTotal;
	
	@Column(name = "chiffre_affaire_export")
	private String chiffreAffaireExport;
	
	@Column(name = "numero_police_assurance1")
	private String numeroPoliceAssurance1;
	
	@Column(name = "nature1")
	private String nature1;
	
	@Column(name = "numero_police_assurance2")
	private String numeropoliceAssurance2;
	
	@Column(name = "nature2")
	private String nature2;
	
	@Column(name = "montant_delegation")
	private String montantDelegation;
	
	@Column(name = "dettes")
	private String dettes;
	
	@Column(name = "achat_consommable")
	private String achatConsommable;
	
	@Column(name = "autres_charges")
	private String autresCharges;
	
	@Column(name = "subventions_exploitation")
	private String subventionsExploitation;
	
	@Column(name = "impots_tax")
	private String impotsTax;
	
	@Column(name = "capital_permanent")
	private String capitalPermanent;
	
	@Column(name = "actif_circulant")
	private String actifCirculant;
	
	@Column(name = "tresorerie_passif")
	private String tresoreriePassif;
	
	@Column(name = "actif_total")
	private String actifTotal;
	
	@Column(name = "passif_total")
	private String passifTotal;
	
	@Column(name = "frais_financiers")
	private String fraisFinanciers;
	
	@Column(name = "stocks")
	private String stocks;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "donneesComptables", allowSetters = true)
    private Entreprise entreprise;
	
	@ManyToOne
    @JsonIgnoreProperties(value = "donneesComptables", allowSetters = true)
    private Assurance assurance;

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

	public Entreprise getEntreprise() {
		return entreprise;
	}

	public void setEntreprise(Entreprise entreprise) {
		this.entreprise = entreprise;
	}

	public Assurance getAssurance() {
		return assurance;
	}

	public void setAssurance(Assurance assurance) {
		this.assurance = assurance;
	}
	
	
}
