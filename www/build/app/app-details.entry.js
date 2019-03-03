const h = window.App.h;

class AppDetails {
    constructor() {
        this.handleClick = (ev) => {
            ev.preventDefault();
            this.deletearticle();
            this.back();
        };
    }
    componentWillLoad() {
        fetch('https://dosispi.cleverapps.io/enseignants/' + this.match.params.id)
            .then(res => res.json())
            .then(res => this.enseignant = res);
    }
    back() {
        alert("The article is deleted!");
        this.history.goBack();
    }
    deletearticle() {
        return fetch('https://dosispi.cleverapps.io/enseignants/' + this.match.params.id, {
            method: 'delete'
        }).then(response => response.json().then(json => {
            return JSON.parse(json);
        }));
    }
    render() {
        return (h("div", null,
            h("h1", null,
                this.enseignant.nom,
                " ",
                this.enseignant.prenom),
            h("h2", null,
                this.enseignant.type,
                " "),
            h("span", { id: "tel" },
                h("b", null, "Mobile : "),
                this.enseignant.mobile),
            h("span", { id: "emailubo" },
                h("b", null, "Email Ubo: "),
                this.enseignant.emailUbostring),
            h("span", { id: "email" },
                h("b", null, "Email Personnel: "),
                this.enseignant.emailPerso),
            h("span", { id: "pays" },
                h("b", null, "Pays: "),
                this.enseignant.pays),
            h("span", { id: "ville" },
                h("b", null, "Ville: "),
                this.enseignant.ville),
            h("br", null),
            h("button", { id: "delete", onClick: (ev) => this.handleClick(ev) }, "DELETE"),
            h("stencil-route-link", { url: `/edit/${this.enseignant.noEnseignant}` },
                h("button", { id: "edit" }, "EDIT"))));
    }
    static get is() { return "app-details"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "enseignant": {
            "state": true
        },
        "history": {
            "type": "Any",
            "attr": "history"
        },
        "match": {
            "type": "Any",
            "attr": "match"
        }
    }; }
    static get style() { return ""; }
}

export { AppDetails };
