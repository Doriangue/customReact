export class Router {
  constructor(name, routes){ this.name = name; this.routes = routes}

  getName = () =>{
    return this.name
  }
  getName = () =>{
    return this.routes
  }
}
export class Route {
  constructor(id, route, path){ this.route = route; this.path = path, this.id = id}

  getId = () =>{
    return this.id
  }
  getRoute = () =>{
    return this.route
  }
  getPath = () =>{
    return this.path
  }

}
