package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;

import com.cred.entities.Caution;

public class CautionSpecification {

	private CautionSpecification() {
    }
	
	public static Specification<Caution> equalEntreprise(Long entrepriseId){
        if(entrepriseId == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.equal( root.get("entreprise"), entrepriseId );
        }
    }
	
	public static Specification<Caution> equalNumeroArrivee(String numeroArrivee){
        if(numeroArrivee == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.equal( root.get("numeroArrivee"), numeroArrivee );
        }
    }
}
