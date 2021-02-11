import { Component } from "../component.js";
import { miniReact } from "../react.js"

export class TextComponent extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {

        let text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        const app = miniReact.createElement("div", { class:"container d-flex justify-content-center mt-5", id: "main"},
                    miniReact.createElement("div", {id: "text"}, text),
                    miniReact.createElement("img", {id: "img w-25", src: "https://i0.wp.com/www.wushujia.fr/wp-content/uploads/2016/03/js-logo.png?ssl=1"},),
                    miniReact.createElement("div", null, "ceci est une image"),
        );

        return app;
    }
}