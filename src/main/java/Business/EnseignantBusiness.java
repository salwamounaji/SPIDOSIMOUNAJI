package Business;

import java.util.List;

import Model.Enseignant;

public interface EnseignantBusiness {
	public Enseignant AddEnseignant(Enseignant enseignant);
	public void DeleteEnseignant(Enseignant Enseignant);
	public List<Enseignant> FindAllEnseignants();
	public List<Enseignant> FindEnseignantByNom(String Nom);
	public Enseignant FindEnseignantByNoEnseignant(long noEnseignant);
	public Enseignant FindEnseignantByEmailUbo(String emailUbo);
}
