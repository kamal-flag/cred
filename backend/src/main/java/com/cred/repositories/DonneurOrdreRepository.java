package com.cred.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import com.cred.entities.DonneurOrdre;

public interface DonneurOrdreRepository extends JpaRepository<DonneurOrdre, Long>, JpaSpecificationExecutor<DonneurOrdre>{

}
