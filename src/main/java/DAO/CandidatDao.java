package DAO;

import java.util.List;
import java.util.Optional;

import Model.Candidat;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface CandidatDao extends CrudRepository<Candidat, String> {

	List<Candidat> findByNom(String nom);
	List<Candidat> findByUniversiteOrigine(String universiteOrigine);
}
