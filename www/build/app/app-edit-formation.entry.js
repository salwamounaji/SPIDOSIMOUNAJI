const h = window.App.h;

class AppEditFormation {
    constructor() {
        this.handleSubmit = (ev) => {
            ev.preventDefault();
            this.modifydata();
            this.back();
        };
    }
    componentWillLoad() {
        fetch('https://api-dosispi.cleverapps.io/formations/' + this.match.params.id)
            .then(res => res.json())
            .then(res => this.formation = res);
    }
    back() {
        window.location.replace("/ListFormation"); // or we can use RouterHistory
    }
    modifydata() {
        return fetch('https://api-dosispi.cleverapps.io/formations/', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                codeFormation: this.match.params.id,
                nomFormation: this.nomFormation.value,
                debutAccreditation: this.debutAccreditation.value,
                diplome: this.diplome.value,
                doubleDiplome: this.doubleDiplome.value,
                finAccreditation: this.finAccreditation.value,
                n0Annee: this.n0Annee.value
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
            alert('The formation was modified!');
            return responseJson.articles;
        })
            .catch((error) => {
            alert('Error ! Please retry again!');
            console.error(error);
        });
    }
    render() {
        if (this.formation != null) {
            return (h("form", { onSubmit: this.handleSubmit },
                h("label", null,
                    " ",
                    h("b", null, "Nom Formation: "),
                    " "),
                h("input", { type: "text", ref: (e) => this.nomFormation = e, placeholder: "Nom Formation", value: this.formation.nomFormation, required: true }),
                h("label", null,
                    " ",
                    h("b", null, "n0Annee : "),
                    " "),
                h("input", { type: "text", ref: (e) => this.n0Annee = e, placeholder: "n0Annee", value: this.formation.n0Annee, required: true }),
                h("label", null,
                    " ",
                    h("b", null, "Diplome : "),
                    " "),
                h("input", { type: "text", ref: (e) => this.diplome = e, placeholder: "diplome", value: this.formation.diplome, required: true }),
                h("label", null,
                    " ",
                    h("b", null, "Double Diplome :"),
                    "  "),
                h("input", { type: "text", ref: (e) => this.doubleDiplome = e, placeholder: "DoubleDiplome", value: this.formation.doubleDiplome, required: true }),
                h("label", null,
                    " ",
                    h("b", null, "Debut Accr\u00E9ditation : "),
                    " "),
                h("input", { type: "date", ref: (e) => this.debutAccreditation = e, placeholder: "yyyy-mm-dd", value: this.formation.debutAccreditation, required: true }),
                h("label", null,
                    " ",
                    h("b", null, "Fin Accr\u00E9ditation: "),
                    " "),
                h("input", { type: "date", ref: (e) => this.finAccreditation = e, placeholder: "yyyy-mm-dd", value: this.formation.finAccreditation, required: true }),
                h("input", { type: "submit", value: "Modify" }),
                h("stencil-route-link", { url: `/` },
                    h("button", null, "Cancel"))));
        }
        else {
            return ("couldn't render the data ");
        }
    }
    static get is() { return "app-edit-formation"; }
    static get properties() { return {
        "formation": {
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
    static get style() { return ".app-edit-formation{\n    padding: 10px;\n  }\n  \n  input[type=text], textarea {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 20px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  \n  input[type=submit], button{\n    background-color: rgb(108,0,54);\n    color: white;\n    margin:0 auto;\n    border: none;\n    font-size: 13px;\n    font-weight: 700;\n    text-transform: uppercase;\n    padding: 16px 20px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n    box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n    outline: 0;\n    letter-spacing: .04em;\n    -webkit-transition: all .15s ease;\n    transition: all .15s ease;\n    cursor: pointer;\n  }\n    \n  input[type=submit]:hover, button {\n    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n    box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n  \n  button{\n    float: right;\n  }\n  \n  form {\n    border-radius: 5px;\n    background-color: #f2f2f2;\n    padding: 20px;\n    margin: 0 auto;\n    margin-top: 50px;\n    width: 1000px;\n  }\n\n  body{\n    background-image:url(../../assets/formation.jpg);\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n }"; }
}

export { AppEditFormation };
