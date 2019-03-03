import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { Enseignant } from '../../../global/Enseignant';

@Component({
  tag: 'app-details-enseignant',
  styleUrl: 'app-details-enseignant.scss',
})

export class AppDetailsEnseignant {

  @State() enseignant: Enseignant;
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;



  componentWillLoad() {
    fetch('https://api-dosispi.cleverapps.io/enseignants/' + this.match.params.id)
      .then(res => res.json())
      .then(res => this.enseignant = res);

  }

  deleteEnseignant(EnsObj) {
    return fetch('https://api-dosispi.cleverapps.io/enseignants', {
      method: 'delete',
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(EnsObj),
    }).then(() => { alert("The enseignant was deleted!");
                    location.href = '/ListEnseignant'; }
    ).catch((error) => {
                   alert(' Error ! please retry again !');
                   console.error(error);
    });
  }


  handleClick = (ev: Event) => {
    ev.preventDefault();
    this.deleteEnseignant(this.enseignant);
  }

  render() {
    if (this.enseignant != null) {
      return (
        <div id="global" class="container">
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {this.enseignant.nom} {this.enseignant.prenom}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <span id="tel"><b>Mobile : </b>{this.enseignant.mobile}</span><br />
                    <span id="emailubo"><b>Email Ubo: </b>{this.enseignant.emailUbo}</span><br />
                    <span id="email"><b>Email Personnel: </b>{this.enseignant.emailPerso}</span><br />
                    <span id="pays"><b>Pays: </b>{this.enseignant.pays}</span><br />
                    <span id="ville"><b>Ville: </b>{this.enseignant.ville}</span><br></br> <br />
                  </div>
                  <footer class="card-footer">
                    <button id="delete" class="card-footer-item" onClick={(ev: UIEvent) => this.handleClick(ev)}>DELETE</button>
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
