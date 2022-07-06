package com.cred.repositories.specifications;

import org.springframework.data.jpa.domain.Specification;

import com.cred.entities.Assurance;
import com.cred.entities.User;

public class UserSpecification {

	private UserSpecification() {
    }
	
	public static Specification<User> likeNom(String nom){
        if(nom == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("nom"), "%"+nom+"%" );
        }
    }
	
	public static Specification<User> likePrenom(String prenom){
        if(prenom == null) {
            return null;
        }
        else {
            return (root, query, criteriaBuilder) ->
                    criteriaBuilder.like( root.get("prenom"), "%"+prenom+"%" );
        }
    }
}
