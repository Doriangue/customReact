import { Component } from "../component.js";
import { miniReact } from "../react.js"

export class ApiComponent extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const app = miniReact.createElement("div", { class: "container mt-5", id: "main"},"Bienvenue sur l'espace API du site", )
            return app;
    }
}