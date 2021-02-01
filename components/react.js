import { Component } from "./component.js";

function addElement(element, props, children) {
    const addElement = document.createElement(element);
    children.forEach(child => {
      if (typeof child === "object") {
        addElement.appendChild(child);
      } else {
        addElement.textContent += child;
      }
    });
    if (props != null) {
      Object.keys(props).forEach(propertyName => {
        if (/^on.*$/.test(propertyName)) {
          addElement.addEventListener(
            propertyName.substring(2).toLowerCase(),
            props[propertyName]
          );
        } else {
          addElement.setAttribute(propertyName, props[propertyName]);
        }
      });
    }
    return addElement;
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

export const reactDOM = {
  render: (rElement, hElement, props = {}) => {
    var prevChild = null;
    var el = new rElement(props);
    var prevChild = el.display();  

    hElement.appendChild(prevChild);
  }
};