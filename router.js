import { mainRouter, Route} from "./components/routingClass.js"

//On crée deux instance de Route dans le mainRouter via la routingClass
export var router = new mainRouter("mainRouter", [
  new Route("Accueil", "/"),
  new Route("Api", "/api")
])

//On export la premiere occurence de notre tableau (parce que filter renvoie un array)
//route pour get les deux Route class avec nos valeur
export var route = router.routes.filter(function(route){
  return route.getPath() === window.location.pathname; //on affecte la route de notre component a la path du navigateur
})[0];