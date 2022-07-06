package com.cred.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.cred.entities.Assurance;

@Repository
public interface AssuranceRepository extends JpaRepository<Assurance, Long>, JpaSpecificationExecutor<Assurance> {
	
}
