import { Component } from "@stencil/core";


@Component({
  tag: 'app-add-enseignant',
  styleUrl: 'app-add-enseignant.css',
})

export class AppAddEnseignant {

  adresse: HTMLInputElement;
  codePostal: HTMLInputElement;
  emailPerso: HTMLInputElement;
  emailUbo: HTMLInputElement;
  mobile: HTMLInputElement;
  nom: HTMLInputElement;
  pays: HTMLInputElement;
  prenom: HTMLInputElement;
  sexe: HTMLInputElement;
  telephone: HTMLInputElement;
  type: HTMLInputElement;
  ville: HTMLInputElement;


  back() {
    alert('The enseignant was added!');
    window.location.replace("/ListEnseignant"); // or we can use RouterHistory
  }

  Senddata() {
    return fetch('https://api-dosispi.cleverapps.io/enseignants/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        adresse: this.adresse.value,
        codePostal: this.codePostal.value,
        emailPerso: this.emailPerso.value,
        emailUbo: this.emailUbo.value,
        mobile: this.mobile.value,
        nom: this.nom.value,
        pays: this.prenom.value,
        prenom: this.prenom.value,
        sexe: this.sexe.value,
        telephone: this.sexe.value,
        type: this.type.value,
        ville: this.ville.value
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        this.back();
        return responseJson.enseignants;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleSubmit = (ev: Event) => {
    ev.preventDefault();
    this.Senddata();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> <b>Nom: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.nom = e} placeholder="Nom" required />
        <label> <b>Prénom: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.prenom = e} placeholder="Prenom" required />
        <label> <b>Email Personnel:</b>  </label><input type="text" ref={(e: HTMLInputElement) => this.emailPerso = e} placeholder="EmailPerso" required />
        <label> <b>Email Ubo: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.emailUbo = e} placeholder="EmailUbo" required />
        <label> <b>Adresse: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.adresse = e} placeholder="adresse" required />
        <label> <b>Pays: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.pays = e} placeholder="Pay" required />
        <label> <b>Ville: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.ville = e} placeholder="Ville" required />
        <label> <b>Mobile: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.mobile = e} placeholder="Mobile" required />
        <label> <b>Sexe: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.sexe = e} placeholder="Sexe" required />
        <label> <b>Type: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.type = e} placeholder="Type" required />
        <label> <b>CodePostal: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.codePostal = e} placeholder="CodePostal" required />
        <label> <b>Telephone: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.telephone = e} placeholder="Telephone" required />

        <input type="submit" value="Add" />
        <stencil-route-link url={`/`}>
          <button >
            Cancel
                                </button>
        </stencil-route-link>
      </form>
    );
  }
}
