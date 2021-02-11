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
        //creation de nos elements
        const app = miniReact.createElement("div", { class: "container" },
            miniReact.createElement("h2", null, "Test Titre"),
            miniReact.createElement("div", null,
                miniReact.createElement("a", { href: rAccueil.getPath()}, rAccueil.getName()),
                miniReact.createElement("a", { href: rApi.getPath()}, rApi.getName()),
                //on ajoute le lien vers nos composants
            )
        );
        return app;
    }
}