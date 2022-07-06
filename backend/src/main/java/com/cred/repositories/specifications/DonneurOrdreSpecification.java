package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;
import com.cred.entities.DonneurOrdre;

public class DonneurOrdreSpecification {

	private DonneurOrdreSpecification() {
    }
	
	public static Specification<DonneurOrdre> likeRaisonSocial(String rc){
        if(rc == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("raisonSociale"), "%"+rc+"%" );
        }
    }
}
