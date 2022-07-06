package com.cred.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.cred.entities.Pays;

public interface PaysRepository extends JpaRepository<Pays, Long>, JpaSpecificationExecutor<Pays>{

}
