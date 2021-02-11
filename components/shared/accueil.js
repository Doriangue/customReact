import { Component } from "../component.js";
import { miniReact } from "../react.js"

export class AccueilComponent extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const app = miniReact.createElement("div", { class: "container mt-5", id: "main"},"Bienvenue sur l'accueil du site", 
            miniReact.createElement("p", { class: "mt-3 ml-3", id: "main"},"Nous sommes sur l'accueil c'est ici que redirige la route Accueil"),
            miniReact.createElement('p', {class: "mt-3 ml-3"}, "Ce site est réalisé Par Loan Besson, Dorian Gueguen & Fendly Belhomme "),
            miniReact.createElement('p', {class: "mt-3 ml-3"}, "Nous avons utilisé Javascript, Bootstrap et google 😅")
            )
        
        ;
        return app;
    }
}