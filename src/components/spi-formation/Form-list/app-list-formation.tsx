import { Component, State } from '@stencil/core';
import { Formation } from '../../../global/Formation';

@Component({
    tag: 'app-list-formation',
    styleUrl: 'app-list-formation.scss',
    shadow: true
})
export class AppListFormation {

    @State() formation: Formation[] = [];


    componentWillLoad() {
        fetch('https://api-dosispi.cleverapps.io/formations')
            .then(res => res.json())
            .then(res => this.formation = res);
    }


    render() {
        if (this.formation != null) {
            return (
                <div class="container">
                    <div class="columns">
                        <div class="columns is-desktop is-multiline">
                            {
                                this.formation.map((item) => {
                                    return (
                                        <div class="card">
                                            <header class="card-header">
                                                <p class="card-header-title">
                                                    {item.nomFormation}
                                                </p>
                                            </header>
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src="../../assets/formationcard.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="content">
                                                    <span> Fin accréditation : {item.finAccreditation}</span> <br />
                                                </div>
                                                <footer class="card-footer">
                                                    <stencil-route-link url={`/detailsformation/${item.codeFormation}`}>
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
        else {

            return ("couldn't render the data ");

        }
    }

}
