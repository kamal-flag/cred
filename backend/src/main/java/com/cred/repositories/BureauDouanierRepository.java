package com.cred.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import com.cred.entities.BureauDouanier;

@Repository
public interface BureauDouanierRepository extends JpaRepository<BureauDouanier, Long>, JpaSpecificationExecutor<BureauDouanier>{

}
