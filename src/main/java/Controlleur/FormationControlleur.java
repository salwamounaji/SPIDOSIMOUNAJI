package Controlleur;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import Business.*;
import Model.Formation;

@CrossOrigin
@RestController
@RequestMapping(value="/formations")
public class FormationControlleur {
    private FormationBusiness formationbusiness;
    
    @Autowired
	public FormationControlleur(FormationBusiness formationbusiness) {
		this.formationbusiness = formationbusiness;
	}

	@RequestMapping(method=RequestMethod.POST)
	public Formation AddFormation(@RequestBody Formation formation) {
		return formationbusiness.AddFormation(formation);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Formation> FindAllFormations() {
		return formationbusiness.FindAllFormations();
	}

	@RequestMapping(method=RequestMethod.GET, value="/nom/{nom}")
	public List<Formation> FindFormationByNom(@PathVariable String nom) {
		return formationbusiness.FindFormationByNom(nom);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/{codeformation}")
	public Formation FindFormationById(@PathVariable String codeformation) {
		return formationbusiness.FindFormationById(codeformation);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public Formation UpdateFormation(@RequestBody Formation formationAMettreAJour){
		    return formationbusiness.UpdateFormation(formationAMettreAJour);
	    }
	
	@RequestMapping(method=RequestMethod.DELETE)
	public void DeleteFormation(@RequestBody Formation formation) {
		formationbusiness.DeleteFormation(formation);
	}
    
	@RequestMapping(method=RequestMethod.DELETE, value="/{codeformation}")
	public void DeleteFormationById(@PathVariable String codeformation) {
		formationbusiness.DeleteFormationById(codeformation);
	}

}
