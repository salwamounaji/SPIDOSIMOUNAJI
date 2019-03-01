package Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import DAO.FormationDao;
import Model.Formation;

@Service
public class FormationBusinessImpl implements FormationBusiness {
	private FormationDao formationRepo;
	
	@Autowired
	public FormationBusinessImpl(FormationDao formationRepo) {
		this.formationRepo = formationRepo;
	}
    
	// Add a formation
	public Formation AddFormation(Formation formation) {
		return formationRepo.save(formation);
	}
    
	// Delete a formation by an object
	public void DeleteFormation(Formation formation) {
		formationRepo.delete(formation);
		
	}
   
	// Delete a formation by an id 
	public void DeleteFormationById(String codeformation) {
		formationRepo.delete(codeformation);	
	}
 
    // Find a formation by a name
	public List<Formation> FindFormationByNom(String nom) {
		return formationRepo.findByNomFormation(nom);
	}
    
	// Find a formation by an id 
	public Formation FindFormationById(String codeformation) {
		return formationRepo.findByCodeFormation(codeformation);
	}
	
	// Update a formation
	public Formation UpdateFormation(Formation formation) {
		return formationRepo.save(formation);
	}
    
	// Find all formations
	public List<Formation> FindAllFormations() {
		return (List<Formation>) formationRepo.findAll();
	}
}
