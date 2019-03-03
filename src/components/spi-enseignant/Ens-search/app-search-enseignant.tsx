import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-search-enseignant',
    styleUrl: 'app-search-enseignant.scss'
})

export class AppSearchEnseignant {

    @State() item: any = "";

    EmailUbo: HTMLInputElement;
    Nom: HTMLInputElement;

    findEnseignantParEmail() {
        let url = 'http://api-dosispi.cleverapps.io/enseignants/emailUbo/'
        let email = this.EmailUbo.value;
        return fetch(url + email)
            .then(response => response.json())
            .then(data => {
                this.item = data;
            });
    }

    findEnseignantParNom() {
        let url = 'http://api-dosispi.cleverapps.io/enseignants/nom/'
        let nomEns = this.Nom.value;
        return fetch(url + nomEns)
            .then(response => response.json())
            .then(data => {
                this.item = data;
            });
    }

    render() {
        if (this.item == "") {
            return (
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-6 is-offset-3">
                            <h1 class="title">
                                Searching
                    </h1>
                            <h2 class="subtitle">
                                This is the case where you can do your research about an enseignant
                    </h2>
                            <div class="box">
                                <div class="field is-grouped">
                                    <p class="control is-expanded">
                                        <input class="input" ref={(el: HTMLInputElement) => this.EmailUbo = el} type="text" placeholder="Email of l'enseignant" />
                                    </p>
                                    <p class="control">
                                        <button onClick={() => this.findEnseignantParEmail()}>Search</button>
                                    </p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="field is-grouped">
                                    <p class="control is-expanded">
                                        <input class="input" ref={(el: HTMLInputElement) => this.Nom = el} type="text" placeholder="Name of enseignant" />
                                    </p>
                                    <p class="control">
                                        <button onClick={() => this.findEnseignantParNom()}>Search</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div class="container">
                    <div class="columns">
                        <div class="columns is-desktop is-multiline">
                            {
                                this.item.map((itemReturn) => {
                                    return (
                                        <div class="card">
                                            <header class="card-header">
                                                <p class="card-header-title">
                                                    {itemReturn.nom}
                                                </p>
                                            </header>
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src="../../assets/teacher.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="content">
                                                    <span>{itemReturn.type}</span>
                                                </div>
                                                <footer class="card-footer">
                                                    <stencil-route-link url={`/detailsEnseignant/${itemReturn.noEnseignant}`}>
                                                        <button class="card-footer-item">
                                                            Details
                                            </button>
                                                    </stencil-route-link>
                                                </footer>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div> </div>
                </div>
            );
        }
    }
}