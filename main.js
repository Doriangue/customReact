import { NavbarComponent } from "./components/shared/navbar.js";
import { reactDOM } from "./components/react.js"
import { route, router} from "./router.js"

// on initialise la navbar en main router
reactDOM.render(NavbarComponent, document.getElementById("root"), {router});

//promise pour s'assurer que la div #root existe bien
let promise = new Promise((resolve, reject) => {
    let content = document.querySelector('#root');
    if(content){
        resolve('Ça fonctionne !');
    } else{
        reject('Ça fonctionne pas !');
    }
});

// Si la promise est valide
promise.then(function(){
    let content = document.querySelector('#root'); //on recupere notre div #root
    if (route.getName() === 'Accueil') { //si on est sur la route Accueil => on render le composant accueil
        reactDOM.render(AccueilComponent, content, {})
    } else if (route.getName() === 'Api'){ //si on est sur la route Api => on render le composant Api
        reactDOM.render(ApiComponent, content, {})
    } else{
        console.log('plus de route'); // si aucune des deux routes
    }
})