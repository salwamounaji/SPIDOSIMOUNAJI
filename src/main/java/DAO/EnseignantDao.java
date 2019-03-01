package DAO;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import Model.Enseignant;

@Repository
public interface EnseignantDao extends CrudRepository<Enseignant, Long> {
	public Enseignant findByNoEnseignant(long noEnseignant);
	public List<Enseignant> findByNom(String nom);
	public Enseignant findByEmailUbo(String emailUbo);
}
