'use strict'
//Arrays, arreglos, matrices, son un conjunto de datos
/*
var nombre = "Miguel Gonzalez";
var nombres = ["Hector", "Mario","Juan","Miguel","Victoria"];
var lenguajes = new Array("PHP","JS","Go","Java","Cobol", "RPG");

console.log(nombres.length);
console.log(lenguajes);
console.log(nombres[3]);

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
for (var i = 0; i <lenguajes.length ; i++) {
	document.write("<li>" + lenguajes[i] + "</li>");
	
	//document.write(i);
	//console.log(i);
}
document.write("</ul>");

lenguajes.forEach((elemento)=>{
	document.write("<li>" + elemento + "</li>");
});
*/
var padres =["Arley", "Oliva"];
var nietos =["Luisa", "Jacobo","Isabela"];
var hijos = ["Habichuela","Otto","Ulder","Yo","La Bella"];
var familia =[padres,hijos,nietos]
console.log(padres);
console.log(hijos);
console.log(familia);
//console.log(familia.hijos.Habichuela);

//adicionar elementos a un array push()
nietos.push("Cm");
nietos.push("Stheeven");
nietos.push("MIguelNotiene");
console.log(nietos);
//eliminar ultimo elemento de un array pop()

nietos.pop();
console.log(nietos);

//convertir un array  a texto join()
console.log(nietos.join());

//convertir una cadena de texto a un array split();
var edades = "12;14;16;18";
console.log(edades.split(";"))

//ordenar array sort();
console.log(nietos);
console.log("orden: " + nietos.sort());


// dar la vuela array reverse()
console.log("Inverso :" +nietos.reverse());

for(let nieto in nietos){
	console.log(nietos[nieto]);
}

//Busquedad en un array find
var busqueda 
busqueda = nietos.find(function(nieto){
	return nieto == "Luisa";
});
console.log("1: " + busqueda);

busqueda = nietos.find(nieto => nieto=="Cm");
console.log("2: " + busqueda);

//buscar indice de un elemento
busqueda = nietos.findIndex(function(nieto){
	return nieto == "Luisa";
});
console.log("1: " + busqueda);

busqueda = nietos.findIndex(nieto => nieto=="Stheeven");
console.log("2: " + busqueda);

//buscar elementos mayores a una condicion
var precios = [10,20,30,40,50];

busqueda = precios.some(function(precio){
	return precio >50;
});
console.log("2: " + busqueda);

busqueda = precios.some(precio => precio>15);
console.log("1: " + busqueda);

