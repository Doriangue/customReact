import { Component } from "./component.js";

function addElement(element, props, children) {
    const addElement = document.createElement(element); // on crée l'élément voulu (div, a, nav)
    children.forEach(child => { //pour chaque enfant 
      if (typeof child === "object") { //si c'est un object alors on lui rajoute son enfant 
        addElement.appendChild(child);
      } else {
        addElement.textContent += child; // sinon on affiche la valeur de celui-ci
      }
    });
    if (props != null) { // si on a des props (class, id etc)
      Object.keys(props).forEach(propertyName => { //on renvoie le tableau de ces props
          addElement.setAttribute(propertyName, props[propertyName]); // on set la valeur des props
      });
    }
    return addElement; // on return notre element
}


// on expose addElement qui elle même return la function createElement en fonction de l'element, de ses props et ses enfants
  export const createElement = (element, props, ...children) => {
      return addElement(element, props, children)
  }

//on expose la class qui permet de créer chaque element;
  export const miniReact = {
      createElement,
      Component
  }
// fonction render qui va permettre d'afficher les composant en, appellent la fonction display
export const reactDOM = {
  render: (rElement, hElement, props = {}) => {
    var prevChild = null;
    var el = new rElement(props); // on cree une nouvelle instance du composant qu'on veut render
    var prevChild = el.display();  // on l'affiche

    hElement.appendChild(prevChild); // et on l'attache a l'élément parent div#root
  }
};