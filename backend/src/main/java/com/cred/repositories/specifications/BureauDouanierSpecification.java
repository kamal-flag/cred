package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;
import com.cred.entities.BureauDouanier;

public class BureauDouanierSpecification {

	private BureauDouanierSpecification() {
    }
	
	public static Specification<BureauDouanier> likeLibelle(String libelle){
        if(libelle == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("libelle"), "%"+libelle+"%" );
        }
    }
}
