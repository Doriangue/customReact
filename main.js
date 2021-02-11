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