import { Component } from "@stencil/core";


@Component({
  tag: 'app-add-formation',
  styleUrl: 'app-add-formation.css',
})

export class AppAddEnseignant {

  codeFormation: HTMLInputElement;
  debutAccreditation: HTMLInputElement;
  diplome: HTMLInputElement;
  doubleDiplome: HTMLInputElement;
  finAccreditation: HTMLInputElement;
  n0Annee: HTMLInputElement;
  nomFormation: HTMLInputElement;


  back() {
    alert('The formation was added!');
    window.location.replace("/ListFormation"); // or we can use RouterHistory
  }

  Senddata() {
    return fetch('https://api-dosispi.cleverapps.io/formations/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codeFormation: this.codeFormation.value,
        nomFormation: this.nomFormation.value,
        debutAccreditation: this.debutAccreditation.value,
        diplome: this.diplome.value,
        doubleDiplome: this.doubleDiplome.value,
        finAccreditation: this.finAccreditation.value,
        n0Annee: this.n0Annee.value
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
        <label> <b>Code Formation: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.codeFormation = e} placeholder="Code Formation" required />
        <label> <b>Nom Formation: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.nomFormation = e} placeholder="Nom Formation" required />
        <label> <b>n0Annee : </b> </label><input type="text" ref={(e: HTMLInputElement) => this.n0Annee = e} placeholder="n0Annee" required />
        <label> <b>Diplome : </b> </label><input type="text" ref={(e: HTMLInputElement) => this.diplome = e} placeholder="diplome" required />
        <label> <b>Double Diplome :</b>  </label><input type="text" ref={(e: HTMLInputElement) => this.doubleDiplome = e} placeholder="DoubleDiplome" required />
        <label> <b>Debut Accréditation : </b> </label><input type="text" ref={(e: HTMLInputElement) => this.debutAccreditation = e} placeholder="yyyy-mm-dd" required />
        <label> <b>Fin Accréditation: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.finAccreditation = e} placeholder="yyyy-mm-dd" required />
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
