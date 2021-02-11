import { Component } from "../component.js";
import { miniReact } from "../react.js"
import { prop_access } from "../functions.js"

export class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.routes = prop_access(props.router, "routes");
        //verif des props routes
    }
    render = () => {
        //On renvoie le tableau correspondant aux routes Accueil et api et on selectionne la premiere occurence
        var rAccueil = this.routes.filter(function(route){
            return route.getName() === "Accueil";
        })[0];
        var rApi = this.routes.filter(function(route){
            return route.getName() === "Api";
        })[0];
        var rText = this.routes.filter(function(route){
            return route.getName() === "Text";
        })[0];
        //creation de nos elements
        const app = miniReact.createElement("div", null,
            miniReact.createElement("nav", {class: "navbar navbar-expand-lg navbar-light bg-dark"}, 
            miniReact.createElement("a", {class: "navbar-brand text-white text-uppercase"}, "Notre custom React"),
            miniReact.createElement("div", {class: "navbar-collapse", id: "navbarSupportedContent"},

                miniReact.createElement("ul", {class: "navbar-nav mr-auto"}, 
                    miniReact.createElement("li", {class: "nav-item"},
                     miniReact.createElement("a", { class: "nav-link text-white", href: rAccueil.getPath()}, rAccueil.getName()),
                    ),
                    miniReact.createElement("li", {class: "nav-item"},
                     miniReact.createElement("a", {class: "nav-link text-white", href: rApi.getPath()}, rApi.getName()),
                    ),
                    miniReact.createElement("li", {class: "nav-item "},
                     miniReact.createElement("a", {class: "nav-link text-white", href: rText.getPath()}, rText.getName()
                    ))),
                //on ajoute le lien vers nos composants
            )
            ),
        );
        return app;
    }
}