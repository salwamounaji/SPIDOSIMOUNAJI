package Business;
import java.util.List;

import Model.Candidat;

public interface CandidatBusiness {
	Candidat AddCandidat(Candidat candidat);
	void DeleteCandidat(Candidat candidat);
	void DeleteCandidatById(String noCandidat);
	List<Candidat> FindCandidatByName(String Nom);
	Candidat FindCandidatById(String id);
	List<Candidat> FindCandidatByUniversity(String Universite);
	List<Candidat> FindAllCandidats();
}
