// On exporte la classe mainRouter qui va contenir toute les "sous routes"

export class mainRouter {
  constructor(name, routes){this.name = name; this.routes = routes}
  getName = () =>{
    return this.name; //get name
  }
  getRoute = () =>{
    return this.routes; //get routes
  }
} 
// On exporte la classe Route qui va definir les Routes
export class Route {
  constructor(name, path){this.name = name, this.path = path;}

  getName = () =>{
    return this.name;
  }

  getPath = () =>{
    return this.path;
  }
} 
