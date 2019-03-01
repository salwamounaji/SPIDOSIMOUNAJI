package DAO;

import java.util.List;
import Model.Formation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

public interface FormationDao extends CrudRepository<Formation, String> {
	public Formation findByCodeFormation(String codeFormation);
	public List<Formation> findByNomFormation(String nom);
	
}