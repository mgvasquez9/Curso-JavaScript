'use strict'

// DOM document Object Model
//permite modificar elementos de una pagina

console.log("Prueba 28-DOM");
//aceder a una etiqueta html desde java script
var caja = document.getElementById('micaja');
//console.log(caja);

//modificar el texto de una etiqueta html desde java script
caja.innerHTML = "¡Texto de la caja desde JS!";
//cambiar color de fondo
caja.style.background ="red";

//cambiar tamaño del texto
caja.style.padding = "20px";

//cambiar color de fuente del texto
caja.style.color = "white";

//adiocionar una clase desde js
caja.className ="hola";
console.log(caja);
 

//acceder a un elemento mediante querySelector por id ".ID" ; por clase "#id"

var caja2 = document.querySelector("#micaja")
console.log(caja2);

var todosLosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(todosLosDivs);
console.log( "texto " + contenidoEnTexto);