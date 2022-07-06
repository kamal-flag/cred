package com.cred.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import com.cred.entities.Pv;

@Repository
public interface PvRepository extends JpaRepository<Pv, Long>, JpaSpecificationExecutor<Pv>{

}
