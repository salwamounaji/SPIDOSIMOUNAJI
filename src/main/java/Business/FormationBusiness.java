package Business;

import java.util.List;

import Model.Formation;

public interface FormationBusiness {
	public Formation AddFormation(Formation formation);
	public void DeleteFormation(Formation formation);
	public void DeleteFormationById(String codeformation);
	public List<Formation> FindAllFormations();
	public List<Formation> FindFormationByNom(String nom);
	public Formation FindFormationById(String codeformation);
	public Formation UpdateFormation(Formation formation);
}



