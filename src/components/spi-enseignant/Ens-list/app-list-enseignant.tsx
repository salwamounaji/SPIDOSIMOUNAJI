import { Component, State } from '@stencil/core';
import { Enseignant } from '../../../global/Enseignant';

@Component({
    tag: 'app-list-enseignant',
    styleUrl: 'app-list-enseignant.scss',
})
export class AppListEnseignant {

    @State() enseignant: Enseignant[] = [];


    componentWillLoad() {
        fetch('https://api-dosispi.cleverapps.io/enseignants')
            .then(res => res.json())
            .then(res => this.enseignant = res);
    }


    render() {
        if (this.enseignant != null) {
            return (
                <div class="container">
                    <div class="columns">
                        <div class="columns is-desktop is-multiline">
                            {
                                this.enseignant.map((item) => {
                                    return (
                                        <div class="card">
                                            <header class="card-header">
                                                <p class="card-header-title">
                                                    {item.nom}
                                                </p>
                                            </header>
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src="../../assets/teacher.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="content">
                                                    <span>{item.type}</span>
                                                </div>
                                                <footer class="card-footer">
                                                    <stencil-route-link url={`/detailsEnseignant/${item.noEnseignant}`}>
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
        else {
            return ("couldn't render the data ");

        }
    }

}
