package Controlleur;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Model.Enseignant;
import Business.EnseignantBusiness;

@RestController
@CrossOrigin
@RequestMapping(value="/enseignants")
public class EnseignantControlleur {
	
	private EnseignantBusiness enseignantBusiness;

	@Autowired
	public EnseignantControlleur(EnseignantBusiness enseignantBusiness) {
		this.enseignantBusiness = enseignantBusiness;
	}

	@RequestMapping(method=RequestMethod.POST)
	public Enseignant AddEnseignant(@RequestBody Enseignant enseignant) {
		return enseignantBusiness.AddEnseignant(enseignant);
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	public void DeleteEnseignant(@RequestBody Enseignant Enseignant) {
		enseignantBusiness.DeleteEnseignant(Enseignant);
	}

	@RequestMapping(method=RequestMethod.GET)
	public List<Enseignant> FindAllEnseignants() {
		return enseignantBusiness.FindAllEnseignants();
	}

	@RequestMapping(method=RequestMethod.GET, value="/nom/{nom}")
	public List<Enseignant> FindEnseignantByNom(@PathVariable String nom) {
		return enseignantBusiness.FindEnseignantByNom(nom);
	}
	@RequestMapping(method=RequestMethod.GET, value="/{noEnseignant}")
	public Enseignant FindEnseignantByNoEnseignant(@PathVariable long noEnseignant) {
		return enseignantBusiness.FindEnseignantByNoEnseignant(noEnseignant);
	}

	@RequestMapping(method=RequestMethod.GET, value="/emailUbo/{emailUbo:.+}")
	public Enseignant FindEnseignantByEmailUbo(@PathVariable String emailUbo) {
		System.out.println(emailUbo);
		return enseignantBusiness.FindEnseignantByEmailUbo(emailUbo);
	}
	
}
