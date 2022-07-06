package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;

import com.cred.entities.Assurance;

public class AssuranceSpecification {

	private AssuranceSpecification() {
    }
	
	public static Specification<Assurance> likeLibelle(String libelle){
        if(libelle == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("libelle"), "%"+libelle+"%" );
        }
    }
}
