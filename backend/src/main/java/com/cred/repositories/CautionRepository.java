package com.cred.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.cred.entities.Caution;

public interface CautionRepository extends JpaRepository<Caution, Long>, JpaSpecificationExecutor<Caution> {

}
