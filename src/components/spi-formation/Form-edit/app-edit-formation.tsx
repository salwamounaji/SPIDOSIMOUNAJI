import { Component, Prop, State } from "@stencil/core";
import { MatchResults, RouterHistory } from '@stencil/router';
import { Formation } from "../../../global/Formation";

@Component({
  tag: 'app-edit-formation',
  styleUrl: 'app-edit-formation.css',
})
export class AppEditFormation {

  @State() formation: Formation;
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;


  codeFormation: HTMLInputElement;
  debutAccreditation: HTMLInputElement;
  diplome: HTMLInputElement;
  doubleDiplome: HTMLInputElement;
  finAccreditation: HTMLInputElement;
  n0Annee: HTMLInputElement;
  nomFormation: HTMLInputElement;


  componentWillLoad() {
    fetch('https://api-dosispi.cleverapps.io/formations/' + this.match.params.id)
      .then(res => res.json())
      .then(res => this.formation = res);

  }


  back() {
    window.location.replace("/ListFormation"); // or we can use RouterHistory
  }

  modifydata() {
    return fetch('https://api-dosispi.cleverapps.io/formations/', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codeFormation: this.match.params.id,
        nomFormation: this.nomFormation.value,
        debutAccreditation: this.debutAccreditation.value,
        diplome: this.diplome.value,
        doubleDiplome: this.doubleDiplome.value,
        finAccreditation: this.finAccreditation.value,
        n0Annee: this.n0Annee.value
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        alert('The formation was modified!');
        return responseJson.articles;
      })
      .catch((error) => {
        alert('Error ! Please retry again!');
        console.error(error);
      });
  }

  handleSubmit = (ev: Event) => {
    ev.preventDefault();
    this.modifydata();
    this.back();
  }


  render() {
    if (this.formation != null) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label> <b>Nom Formation: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.nomFormation = e} placeholder="Nom Formation" value={this.formation.nomFormation} required />
          <label> <b>n0Annee : </b> </label><input type="text" ref={(e: HTMLInputElement) => this.n0Annee = e} placeholder="n0Annee" value={this.formation.n0Annee} required />
          <label> <b>Diplome : </b> </label><input type="text" ref={(e: HTMLInputElement) => this.diplome = e} placeholder="diplome" value={this.formation.diplome} required />
          <label> <b>Double Diplome :</b>  </label><input type="text" ref={(e: HTMLInputElement) => this.doubleDiplome = e} placeholder="DoubleDiplome" value={this.formation.doubleDiplome} required />
          <label> <b>Debut Accréditation : </b> </label><input type="date" ref={(e: HTMLInputElement) => this.debutAccreditation = e} placeholder="yyyy-mm-dd" value={this.formation.debutAccreditation} required />
          <label> <b>Fin Accréditation: </b> </label><input type="date" ref={(e: HTMLInputElement) => this.finAccreditation = e} placeholder="yyyy-mm-dd" value={this.formation.finAccreditation} required />

          <input type="submit" value="Modify" />
          <stencil-route-link url={`/`}>
            <button >
              Cancel
                              </button>
          </stencil-route-link>
        </form>
      );
    }
    else {
      return ("couldn't render the data ");
    }
  }
}
