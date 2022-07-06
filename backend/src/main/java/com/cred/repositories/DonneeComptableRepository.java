package com.cred.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.cred.entities.DonneeComptable;

public interface DonneeComptableRepository extends JpaRepository<DonneeComptable, Long>, JpaSpecificationExecutor<DonneeComptable>{

}
