package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;

import com.cred.entities.Pv;
public class PvSpecification {

	private PvSpecification() {
    }
	
	public static Specification<Pv> equalEntreprise(Long entrepriseId){
        if(entrepriseId == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.equal( root.get("entreprise"), entrepriseId );
        }
    }
	
	public static Specification<Pv> likeActivite(String activite){
        if(activite == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("activitePV"), "%" + activite + "%" );
        }
    }
}
