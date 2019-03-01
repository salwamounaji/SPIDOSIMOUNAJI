package Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import DAO.PromotionDao;
import Model.Promotion;
import Model.PromotionPk;


@Service
public class PromotionBusinessImpl implements PromotionBusiness{
PromotionDao promotionDao;
	
	@Autowired
	public PromotionBusinessImpl(PromotionDao promotionDao) {
		super();
		this.promotionDao = promotionDao;
	}

	public Promotion AddPromotion(Promotion promotion) {
		return promotionDao.save(promotion);
	}


	public void DeletePromotion(Promotion promotion) {
		promotionDao.delete(promotion);
	}


	public void DeletePromotionById(PromotionPk id) {
		promotionDao.delete(id);
	}


	public List<Promotion> FindAllPromotions() {
		return (List<Promotion>) promotionDao.findAll();
	}


	public List<Promotion> FindPromotionBySigle(String siglepromotion) {
		return promotionDao.findBySiglePromotion(siglepromotion);
	}


	public Promotion FindPromotionById(PromotionPk id) {
		return promotionDao.findOne(id);
	}


	public List<Promotion>  FindPromotionByLieuRentree(String lieurentree) {
		return promotionDao.findByLieuRentree(lieurentree);
    }

}