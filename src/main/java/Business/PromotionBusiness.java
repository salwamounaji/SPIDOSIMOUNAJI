package Business;

import java.util.List;

import Model.Promotion;
import Model.PromotionPk;

public interface PromotionBusiness {
	public Promotion AddPromotion(Promotion promotion);
	public void DeletePromotion(Promotion promotion);
	public void DeletePromotionById(PromotionPk id);
	public List<Promotion> FindAllPromotions();
	public List<Promotion> FindPromotionBySigle(String siglepromotion);
	public Promotion FindPromotionById(PromotionPk id);
	public List<Promotion> FindPromotionByLieuRentree(String lieurentree);
}
