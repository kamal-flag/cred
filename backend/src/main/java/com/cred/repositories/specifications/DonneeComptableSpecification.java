package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;
import com.cred.entities.DonneeComptable;

public class DonneeComptableSpecification {

	private DonneeComptableSpecification() {
    }
	
	public static Specification<DonneeComptable> equalEntreprise(Long entrepriseId){
        if(entrepriseId == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.equal( root.get("entreprise"), entrepriseId );
        }
    }
}
