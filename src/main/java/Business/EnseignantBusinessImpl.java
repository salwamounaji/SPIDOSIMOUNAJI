package Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Model.Enseignant;
import DAO.EnseignantDao;

@Service
public class EnseignantBusinessImpl implements EnseignantBusiness{
	private EnseignantDao enseignantDao;
	
	@Autowired
	public EnseignantBusinessImpl(EnseignantDao enseignantDao) {
		this.enseignantDao = enseignantDao;
	}
	

	public Enseignant AddEnseignant(Enseignant enseignant) {
		return enseignantDao.save(enseignant);
	}


	public void DeleteEnseignant(Enseignant Enseignant) {
		enseignantDao.delete(Enseignant);
	}

	
	public List<Enseignant> FindAllEnseignants() {
		return (List<Enseignant>) enseignantDao.findAll();
	}


	public List<Enseignant> FindEnseignantByNom(String nom) {
		return enseignantDao.findByNom(nom);
	}


	public Enseignant FindEnseignantByNoEnseignant(long noEnseignant) {
		return enseignantDao.findByNoEnseignant(noEnseignant);
	}

	
	public Enseignant FindEnseignantByEmailUbo(String emailUbo) {
		return enseignantDao.findByEmailUbo(emailUbo);
	}

}
