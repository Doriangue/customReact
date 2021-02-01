import { Component } from "../component.js";
import { miniReact } from "../react.js"

export class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const app = miniReact.createElement("div", {id: "main"},"test");
        return app;
    }
}