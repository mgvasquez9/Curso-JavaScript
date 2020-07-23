'use strict'

//JSON:  JavaScript Object Notacio : nNotacion de objetos de javaScrip
console.log("33-JSON.JS");

var pelicula = {
	titulo: "Detras del ultimo no viene nadie",
	year: 2020,
	pais: "USA"
};

var peliculas = [
{titulo:"Bajo la sombra de un papapyo", year:205, pais:"USB"},
pelicula];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo);
	caja_peliculas.append(p);
 }

console.log(pelicula);
