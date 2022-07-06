package com.cred.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import com.cred.entities.AssocieGerant;

@Repository
public interface AssocieGerantRepository extends JpaRepository<AssocieGerant, Long>, JpaSpecificationExecutor<AssocieGerant>{

}
