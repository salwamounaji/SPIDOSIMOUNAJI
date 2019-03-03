import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url='/AddEnseignant' component='app-add-enseignant' />
              <stencil-route url='/AddFormation' component='app-add-formation' />
              <stencil-route url='/EditFormation/:id' component='app-edit-formation' />
              <stencil-route url='/ListEnseignant' component='app-list-enseignant' />
              <stencil-route url='/ListFormation' component='app-list-formation' />
              <stencil-route url='/detailsEnseignant/:id' component='app-details-enseignant' />
              <stencil-route url='/detailsFormation/:id' component='app-details-formation' />
              <stencil-route url='/SearchEnseignant' component='app-search-enseignant' />
              <stencil-route url='/SearchFormation' component='app-search-formation' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
