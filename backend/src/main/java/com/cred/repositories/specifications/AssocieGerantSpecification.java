package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;

import com.cred.entities.AssocieGerant;

public class AssocieGerantSpecification {

	private AssocieGerantSpecification() {
    }
	
	public static Specification<AssocieGerant> likeIdentifiant(String identifiant){
        if(identifiant == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("identifiant"), "%"+identifiant+"%" );
        }
    }
}
