const h = window.App.h;

class AppDetailsCandidat {
    constructor() {
        this.handleClick = (ev) => {
            ev.preventDefault();
            this.deletearticle();
            this.back();
        };
    }
    componentWillLoad() {
        fetch('https://dosispi.cleverapps.io/candidat/' + this.match.params.idd)
            .then(res => res.json())
            .then(res => this.candidat = res);
    }
    back() {
        alert("The article is deleted!");
        this.history.goBack();
    }
    deletearticle() {
        return fetch('https://dosispi.cleverapps.io/candidat/' + this.match.params.idd, {
            method: 'delete'
        }).then(response => response.json().then(json => {
            return JSON.parse(json);
        }));
    }
    render() {
        /* return (
           <div>
                <h1>{this.candidat.title}</h1>
                <p>{this.candidat.article} </p>
                <span id="auth"><b>Author: </b>{this.candidat.autor}</span>
                <span id="date"><b>Creation Date: </b>{this.candidat.creationDate}</span><br></br>
                <button id="delete" onClick={ (ev: UIEvent) => this.handleClick(ev)}>DELETE</button>
                <stencil-route-link url={`/edit/${this.candidat._id}`}>
                                       <button id="edit">
                                            EDIT
                                       </button>
                </stencil-route-link>
         
           </div>
        
       );*/
    }
    static get is() { return "app-details-candidat"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "candidat": {
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

export { AppDetailsCandidat };
