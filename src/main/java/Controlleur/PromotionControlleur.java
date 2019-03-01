package Controlleur;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import Business.PromotionBusiness;
import Model.Promotion;
import Model.PromotionPk;

@RestController
@CrossOrigin
@RequestMapping(value="/promotions")
public class PromotionControlleur {
	PromotionBusiness promotionBusiness;
	
	@Autowired
	public PromotionControlleur(PromotionBusiness promotionBusiness) {
		super();
		this.promotionBusiness = promotionBusiness;
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public void AddPromotion(@RequestBody Promotion promotion) {
		promotionBusiness.AddPromotion(promotion);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Promotion> FindAllPromotions() {
		return promotionBusiness.FindAllPromotions();
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/sigle/{siglePromotion}")
	public List<Promotion> FindPromotionBySigle(@PathVariable String siglePromotion) {
		return promotionBusiness.FindPromotionBySigle(siglePromotion);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/{codeFormation}/{anneeUniversitaire}")
	public Promotion FindPromotionById(@PathVariable String codeFormation, @PathVariable String anneeUniversitaire) {
		PromotionPk promotionPk = new PromotionPk();
		promotionPk.setAnneeUniversitaire(anneeUniversitaire);
		promotionPk.setCodeFormation(codeFormation);
		return promotionBusiness.FindPromotionById(promotionPk);
	}

	@RequestMapping(method=RequestMethod.GET, value="/lieuRentree/{lieuRentree}")
	public List<Promotion>  FindPromotionByLieuRentree(@PathVariable String lieuRentree) {
		return promotionBusiness.FindPromotionByLieuRentree(lieuRentree);
	}

	@RequestMapping(method=RequestMethod.DELETE)
	public void DeletePromotion(@RequestBody Promotion promotion) {
		promotionBusiness.DeletePromotion(promotion);
	}

	@RequestMapping(method=RequestMethod.DELETE, value="/{codeFormation}/{anneeUniversitaire}")
	public void DeletePromotionById(@PathVariable String codeFormation, @PathVariable String anneeUniversitaire) {
		PromotionPk promotionPk = new PromotionPk();
		promotionPk.setAnneeUniversitaire(anneeUniversitaire);
		promotionPk.setCodeFormation(codeFormation);
		promotionBusiness.DeletePromotionById(promotionPk);
	}
}