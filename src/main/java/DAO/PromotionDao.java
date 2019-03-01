package DAO;

import java.util.List;
import Model.Promotion;
import Model.PromotionPk;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

public interface PromotionDao extends JpaRepository<Promotion, PromotionPk>{
	List<Promotion> findBySiglePromotion(String siglepromotion);
	List<Promotion> findByLieuRentree(String lieurentree);
}
