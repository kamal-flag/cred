package com.cred.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.cred.entities.Entreprise;
import com.cred.entities.EntrepriseAssocieGerant;

public interface EntrepriseAssocieGerantRepository extends JpaRepository<EntrepriseAssocieGerant, Long>, JpaSpecificationExecutor<EntrepriseAssocieGerant>{

	List<EntrepriseAssocieGerant> findByEntreprise(Entreprise entreprise);
}
