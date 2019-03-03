const h = window.App.h;

class AppAddEnseignant {
    constructor() {
        this.handleSubmit = (ev) => {
            ev.preventDefault();
            this.Senddata();
        };
    }
    back() {
        alert('The enseignant was added!');
        window.location.replace("/ListEnseignant"); // or we can use RouterHistory
    }
    Senddata() {
        return fetch('https://api-dosispi.cleverapps.io/enseignants/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
            this.back();
            return responseJson.enseignants;
        })
            .catch((error) => {
            console.error(error);
        });
    }
    render() {
        return (h("form", { onSubmit: this.handleSubmit },
            h("label", null,
                " ",
                h("b", null, "Nom: "),
                " "),
            h("input", { type: "text", ref: (e) => this.nom = e, placeholder: "Nom", required: true }),
            h("label", null,
                " ",
                h("b", null, "Pr\u00E9nom: "),
                " "),
            h("input", { type: "text", ref: (e) => this.prenom = e, placeholder: "Prenom", required: true }),
            h("label", null,
                " ",
                h("b", null, "Email Personnel:"),
                "  "),
            h("input", { type: "text", ref: (e) => this.emailPerso = e, placeholder: "EmailPerso", required: true }),
            h("label", null,
                " ",
                h("b", null, "Email Ubo: "),
                " "),
            h("input", { type: "text", ref: (e) => this.emailUbo = e, placeholder: "EmailUbo", required: true }),
            h("label", null,
                " ",
                h("b", null, "Adresse: "),
                " "),
            h("input", { type: "text", ref: (e) => this.adresse = e, placeholder: "adresse", required: true }),
            h("label", null,
                " ",
                h("b", null, "Pays: "),
                " "),
            h("input", { type: "text", ref: (e) => this.pays = e, placeholder: "Pay", required: true }),
            h("label", null,
                " ",
                h("b", null, "Ville: "),
                " "),
            h("input", { type: "text", ref: (e) => this.ville = e, placeholder: "Ville", required: true }),
            h("label", null,
                " ",
                h("b", null, "Mobile: "),
                " "),
            h("input", { type: "text", ref: (e) => this.mobile = e, placeholder: "Mobile", required: true }),
            h("label", null,
                " ",
                h("b", null, "Sexe: "),
                " "),
            h("input", { type: "text", ref: (e) => this.sexe = e, placeholder: "Sexe", required: true }),
            h("label", null,
                " ",
                h("b", null, "Type: "),
                " "),
            h("input", { type: "text", ref: (e) => this.type = e, placeholder: "Type", required: true }),
            h("label", null,
                " ",
                h("b", null, "CodePostal: "),
                " "),
            h("input", { type: "text", ref: (e) => this.codePostal = e, placeholder: "CodePostal", required: true }),
            h("label", null,
                " ",
                h("b", null, "Telephone: "),
                " "),
            h("input", { type: "text", ref: (e) => this.telephone = e, placeholder: "Telephone", required: true }),
            h("input", { type: "submit", value: "Add" }),
            h("stencil-route-link", { url: `/` },
                h("button", null, "Cancel"))));
    }
    static get is() { return "app-add-enseignant"; }
    static get style() { return ".app-add-formation {\n  padding: 10px;\n}\n\ninput[type=text], textarea {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 20px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type=submit], button{\n  background-color: rgb(108,0,54);\n  color: white;\n  margin:0 auto;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  outline: 0;\n  letter-spacing: .04em;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  cursor: pointer;\n}\n  \ninput[type=submit]:hover, button {\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px);\n}\n\nbutton{\n  float: right;\n}\n\nform {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n  margin: 0 auto;\n  margin-top: 50px;\n  width: 1000px;\n}\n\ntextarea {\n  width: 100%;\n  height: 150px;\n  padding: 12px 20px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  font-size: 16px;\n  resize: none;\n  margin: 20px 0;\n}\n\nbody{\n  background-image:url(../../assets/enseignant.jpg);\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}"; }
}

export { AppAddEnseignant };
