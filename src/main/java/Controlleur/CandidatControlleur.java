package Controlleur;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import Model.*;
import DAO.*;
import Business.*;

@CrossOrigin
@RestController
@RequestMapping("/candidats")
public class CandidatControlleur {
	
private CandidatBusiness candidatBusiness;
	
	@Autowired
	public CandidatControlleur(CandidatBusiness business) {
		this.candidatBusiness = business;
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Candidat AddCandidat(@RequestBody Candidat candidat) {
		return candidatBusiness.AddCandidat(candidat);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Candidat> FindAllCandidats(){
		return candidatBusiness.FindAllCandidats();
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/{id}")
	public Candidat FindCandidatById(@PathVariable String id) {
		return candidatBusiness.FindCandidatById(id);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/nom/{nom}")
	public List<Candidat> FindCandidatByName(@PathVariable String nom){
		return candidatBusiness.FindCandidatByName(nom);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/universite/{universite}")
	public List<Candidat> FindCandidatByUniversitye(@PathVariable String universite){
		return candidatBusiness.FindCandidatByUniversity(universite);
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	public void DeleteCandidat(@RequestBody Candidat candidat) {
		candidatBusiness.DeleteCandidat(candidat);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/{id}")
	public void DeleteCandidatById(@PathVariable String id) {
		candidatBusiness.DeleteCandidatById(id);
	}
	

	
}
	



