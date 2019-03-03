import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { Formation } from '../../../global/Formation';

@Component({
  tag: 'app-details-formation',
  styleUrl: 'app-details-formation.scss',
})

export class AppDetailsFormation {

  @State() formation: Formation;
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;



  componentWillLoad() {
    fetch('https://api-dosispi.cleverapps.io/formations/' + this.match.params.id)
      .then(res => res.json())
      .then(res => this.formation = res);

  }

  back() {
    alert("The article is deleted!");
    this.history.goBack();
  }

  deletearticle() {
    return fetch('https://api-dosispi.cleverapps.io/formations/' + this.match.params.id, {
      method: 'delete'
    }).then(response =>
      response.json().then(json => {
        return JSON.parse(json);
      })
    );
  }


  handleClick = (ev: Event) => {
    ev.preventDefault();
    this.deletearticle();
    this.back();

  }

  render() {
    if (this.formation != null) {
      return (
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {this.formation.nomFormation}  <br />N Année:{this.formation.n0Annee}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <span id="debutaccredit"><b>Début Accréditation : </b>{this.formation.debutAccreditation}</span><br />
                    <span id="finaccredit"><b>Début Accréditation : </b>{this.formation.debutAccreditation}</span><br />
                    <span id="diplome"><b>Diplome : </b>{this.formation.diplome}</span><br />
                    <span id="doublediplome"><b>Double Diplome: </b>{this.formation.doubleDiplome}</span><br /><br />
                  </div>
                  <footer class="card-footer">
                    <button id="delete" class="card-footer-item" onClick={(ev: UIEvent) => this.handleClick(ev)}>DELETE</button>
                    <stencil-route-link url={`/EditFormation/${this.formation.codeFormation}`}>
                      <button id="edit" class="card-footer-item">
                        EDIT
                                               </button>
                    </stencil-route-link>
                  </footer>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
    else {

      return ("couldn't render the data ");

    }
  }

}
