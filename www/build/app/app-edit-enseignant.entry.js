const h = window.App.h;

class AppEditEnseignant {
    constructor() {
        this.handleSubmit = (ev) => {
            ev.preventDefault();
            this.modifydata();
            this.back();
        };
    }
    componentWillLoad() {
        fetch('https://dosispi.cleverapps.io/enseignants/' + this.match.params.id)
            .then(res => res.json())
            .then(res => this.enseignant = res);
    }
    back() {
        this.history.goBack();
    }
    modifydata() {
        return fetch('https://dosispi.cleverapps.io/enseignants/', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                noEnseignant: this.match.params.id,
                adresse: this.adresse.value,
                codePostal: this.codePostal.value,
                emailPerso: this.emailPerso.value,
                emailUbo: this.emailUbo.value,
                mobile: this.mobile.value,
                nom: this.nom.value,
                pays: this.prenom.value,
                prenom: this.prenom.value,
                sexe: this.sexe.value,
                telephone: this.sexe.value,
                type: this.type.value,
                ville: this.ville.value
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
            alert('The article is modified!');
            return responseJson.articles;
        })
            .catch((error) => {
            alert('Please retry again!!');
            console.error(error);
        });
    }
    render() {
        return (h("form", { onSubmit: this.handleSubmit },
            h("label", null,
                " ",
                h("b", null, "Nom: "),
                " "),
            h("input", { type: "text", ref: (e) => this.nom = e, placeholder: "Nom", value: this.enseignant.nom, required: true }),
            h("label", null,
                " ",
                h("b", null, "Pr\u00E9nom: "),
                " "),
            h("input", { type: "text", ref: (e) => this.prenom = e, placeholder: "Prenom", value: this.enseignant.prenom, required: true }),
            h("label", null,
                " ",
                h("b", null, "emailPerso:"),
                "  "),
            h("input", { type: "text", ref: (e) => this.emailPerso = e, placeholder: "emailPerso", value: this.enseignant.emailPerso, required: true }),
            h("label", null,
                " ",
                h("b", null, "emailUbo: "),
                " "),
            h("input", { type: "text", ref: (e) => this.emailUbo = e, placeholder: "emailUbo", value: this.enseignant.emailUbo, required: true }),
            h("label", null,
                " ",
                h("b", null, "adresse: "),
                " "),
            h("input", { type: "text", ref: (e) => this.adresse = e, placeholder: "adresse", value: this.enseignant.adresse, required: true }),
            h("label", null,
                " ",
                h("b", null, "Pays: "),
                " "),
            h("input", { type: "text", ref: (e) => this.pays = e, placeholder: "Pay", value: this.enseignant.pays, required: true }),
            h("label", null,
                " ",
                h("b", null, "ville: "),
                " "),
            h("input", { type: "text", ref: (e) => this.ville = e, placeholder: "Ville", value: this.enseignant.ville, required: true }),
            h("label", null,
                " ",
                h("b", null, "mobile: "),
                " "),
            h("input", { type: "text", ref: (e) => this.mobile = e, placeholder: "Mobile", value: this.enseignant.mobile, required: true }),
            h("label", null,
                " ",
                h("b", null, "Sexe: "),
                " "),
            h("input", { type: "text", ref: (e) => this.sexe = e, placeholder: "Sexe", value: this.enseignant.sexe, required: true }),
            h("label", null,
                " ",
                h("b", null, "Type: "),
                " "),
            h("input", { type: "text", ref: (e) => this.type = e, placeholder: "Type", value: this.enseignant.type, required: true }),
            h("label", null,
                " ",
                h("b", null, "CodePostal: "),
                " "),
            h("input", { type: "text", ref: (e) => this.codePostal = e, placeholder: "CodePostal", value: this.enseignant.codePostal, required: true }),
            h("label", null,
                " ",
                h("b", null, "Telephone: "),
                " "),
            h("input", { type: "text", ref: (e) => this.telephone = e, placeholder: "Telephone", value: this.enseignant.telephone, required: true }),
            h("input", { type: "submit", value: "Modify" }),
            h("stencil-route-link", { url: `/` },
                h("button", null, "Cancel"))));
    }
    static get is() { return "app-edit-enseignant"; }
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
    static get style() { return ".app-edit-enseignant{\n    padding: 10px;\n  }\n  \n  input[type=text], textarea {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 20px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  \n  input[type=submit], button{\n    background-color: rgb(108,0,54);\n    color: white;\n    margin:0 auto;\n    border: none;\n    font-size: 13px;\n    font-weight: 700;\n    text-transform: uppercase;\n    padding: 16px 20px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n    box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n    outline: 0;\n    letter-spacing: .04em;\n    -webkit-transition: all .15s ease;\n    transition: all .15s ease;\n    cursor: pointer;\n  }\n    \n  input[type=submit]:hover, button {\n    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n    box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n  \n  button{\n    float: right;\n  }\n  \n  form {\n    border-radius: 5px;\n    background-color: #f2f2f2;\n    padding: 20px;\n    margin: 0 auto;\n    margin-top: 50px;\n    width: 1000px;\n  }"; }
}

export { AppEditEnseignant };
