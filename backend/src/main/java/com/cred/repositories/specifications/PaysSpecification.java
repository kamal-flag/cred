package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;

import com.cred.entities.Assurance;
import com.cred.entities.Pays;

public class PaysSpecification {

	private PaysSpecification() {
    }
	
	public static Specification<Pays> likeLibelle(String libelle){
        if(libelle == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("libelle"), "%"+libelle+"%" );
        }
    }
}
