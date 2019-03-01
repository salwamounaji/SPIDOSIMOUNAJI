package Business;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import DAO.CandidatDao;
import Model.Candidat;

    @Service
	public class CandidatBusinessImpl implements CandidatBusiness {

		CandidatDao candidatDao;
		
		@Autowired
		public CandidatBusinessImpl(CandidatDao candidatDao) {
			this.candidatDao = candidatDao;
		}
		
		// Add a candidat
		public Candidat AddCandidat(Candidat candidat) {
			candidat.setDateReponseCandidat(new Date());
			return candidatDao.save(candidat);
		}       
		
		// Delete the candidat by an object
		public void DeleteCandidat(Candidat candidat) {
			candidatDao.delete(candidat);
		}
		
		// Delete the candidat by his Id
		public void DeleteCandidatById(String noCandidat) {
			candidatDao.delete(noCandidat);
		}
        
		// Find a candidat by his name
		public List<Candidat> FindCandidatByName(String nom) {
			return candidatDao.findByNom(nom);
		}
		
		// Find a candidat by his Id
		public Candidat FindCandidatById(String id) {
			return candidatDao.findOne(id);
		}
        
		// Find a candidat by his university
		public List<Candidat> FindCandidatByUniversity(String universiteOrigine) {
			return candidatDao.findByUniversiteOrigine(universiteOrigine);
		}
        
		// Find all candidats
		public List<Candidat> FindAllCandidats() {
			return (List<Candidat>) candidatDao.findAll();
		}

    }
