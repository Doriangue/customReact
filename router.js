import { mainRouter, Route} from "./components/routingClass.js"

//On crée deux instance de Route dans le mainRouter via la routingClass
export var router = new mainRouter("mainRouter", [
  new Route("Accueil", "/"),
  new Route("Api", "/api")
])