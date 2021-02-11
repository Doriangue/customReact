import { NavbarComponent } from "./components/shared/navbar.js";
import { reactDOM } from "./components/react.js"
import { route, router} from "./router.js"

// on initialise la navbar en main router
reactDOM.render(NavbarComponent, document.getElementById("root"), {router});