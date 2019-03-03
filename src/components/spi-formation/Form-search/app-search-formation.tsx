import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-search-formation',
    styleUrl: 'app-search-formation.scss'
})

export class AppSearchFormation {

    @State() item: any = "";

    Nom: HTMLInputElement;

    findFormationByName() {
        let url = 'http://api-dosispi.cleverapps.io/formations/nom/'
        let nomFormation = this.Nom.value;
        return fetch(url + nomFormation)
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
                                This is the case where you can do your research about a formation
                    </h2>
                            <div class="box">
                                <div class="field is-grouped">
                                    <p class="control is-expanded">
                                        <input class="input" ref={(el: HTMLInputElement) => this.Nom = el} type="text" placeholder="Nom of formation" />
                                    </p>
                                    <p class="control">
                                        <button onClick={() => this.findFormationByName()}>Search</button>
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
                                                    {itemReturn.nomFormation}
                                                </p>
                                            </header>
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src="../../assets/formationcard.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="content">
                                                    <span> Fin accréditation : {itemReturn.finAccreditation}</span> <br />
                                                </div>
                                                <footer class="card-footer">
                                                    <stencil-route-link url={`/detailsformation/${itemReturn.codeFormation}`}>
                                                        <button class="card-footer-item">
                                                            For more details
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