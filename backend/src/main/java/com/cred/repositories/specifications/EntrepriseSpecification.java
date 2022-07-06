package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;
import com.cred.entities.Entreprise;

public class EntrepriseSpecification {

	private EntrepriseSpecification() {
    }
	
	public static Specification<Entreprise> equalCentreRC(String centreRC){
        if(centreRC == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.equal( root.get("centreRC"), centreRC );
        }
    }
	
	public static Specification<Entreprise> equalNumeroRC(String numeroRC){
        if(numeroRC == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.equal( root.get("numeroRC"), numeroRC );
        }
    }
	
	public static Specification<Entreprise> likeRaisonSocial(String raisonSociale){
        if(raisonSociale == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("raisonSociale"), "%"+raisonSociale+"%" );
        }
    }
	
	public static Specification<Entreprise> equalEtatEntreprise(Integer etatEntreprise){
        if(etatEntreprise == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.equal( root.get("etatEntreprise"), etatEntreprise );
        }
    }
}
