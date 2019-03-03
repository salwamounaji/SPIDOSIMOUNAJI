import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav class="navbar is-transparent">
           <div class="navbar-brand">
            <span class="navbar-item">
              <h1>SPI-ADM</h1>
            </span>
         </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link" href="/ListFormation/">
      <span>
                    <i class="fas fa-tools" />
                  </span>{" "}
        Formation
      </a>
      <div class="navbar-dropdown is-boxed">
        <a class="navbar-item" href="/ListFormation/">
          List des formations
        </a>
        <a class="navbar-item" href="/AddFormation/">
          Ajout d'une formation
        </a>
        <a class="navbar-item" href="/SearchFormation/">
           Chercher une formation
        </a>
      </div>
    </div> 
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link" href="/ListEnseignant/">
      <span>
                    <i class="fas fa-chalkboard-teacher" />
                  </span>{" "}
        Enseignant
      </a>
      <div class="navbar-dropdown is-boxed">
        <a class="navbar-item" href="/ListEnseignant/">
          List des enseignants
        </a>
        <a class="navbar-item" href="/AddEnseignant/">
          Ajout d'un enseignant
        </a>
        <a class="navbar-item" href="/SearchEnseignant/">
           Chercher un enseignant
        </a>
      </div>
    </div>
    </div>
  </div>
  </nav>

    );
  }
}
