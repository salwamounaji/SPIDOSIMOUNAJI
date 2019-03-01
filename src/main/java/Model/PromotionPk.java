package Model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class PromotionPk implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(name="CODE_FORMATION", insertable=false, updatable=false)
	private String codeFormation;
	
	@Column(name="ANNEE_UNIVERSITAIRE")
	private String anneeUniversitaire;

	public PromotionPk() {
		super();
	}

	public PromotionPk(String anneeUniversitaire, String codeFormation) {
		super();
		this.anneeUniversitaire = anneeUniversitaire;
		this.codeFormation = codeFormation;
	}

	public String getAnneeUniversitaire() {
		return anneeUniversitaire;
	}

	public void setAnneeUniversitaire(String anneeUniversitaire) {
		this.anneeUniversitaire = anneeUniversitaire;
	}

	public String getCodeFormation() {
		return this.codeFormation;
	}
	public void setCodeFormation(String codeFormation) {
		this.codeFormation = codeFormation;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((anneeUniversitaire == null) ? 0 : anneeUniversitaire.hashCode());
		result = prime * result + ((codeFormation == null) ? 0 : codeFormation.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PromotionPk other = (PromotionPk) obj;
		if (anneeUniversitaire == null) {
			if (other.anneeUniversitaire != null)
				return false;
		} else if (!anneeUniversitaire.equals(other.anneeUniversitaire))
			return false;
		if (codeFormation == null) {
			if (other.codeFormation != null)
				return false;
		} else if (!codeFormation.equals(other.codeFormation))
			return false;
		return true;
	}

	
}
