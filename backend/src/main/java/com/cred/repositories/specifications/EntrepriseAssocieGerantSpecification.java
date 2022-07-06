package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;
import com.cred.entities.EntrepriseAssocieGerant;

public class EntrepriseAssocieGerantSpecification {

	private EntrepriseAssocieGerantSpecification() {
    }
	
	public static Specification<EntrepriseAssocieGerant> equalEntreprise(Long entrepriseId){
        if(entrepriseId == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.equal( root.get("entreprise"), entrepriseId );
        }
    }
	
	public static Specification<EntrepriseAssocieGerant> likeIdentifiant(String identifiant){
        if(identifiant == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("associeGerant").get("identifiant"), "%" + identifiant +"%" );
        }
    }
}
