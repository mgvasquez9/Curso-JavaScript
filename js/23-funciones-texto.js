'use strict'

var numero = 444;
var texto1 = " Bienvenidos al curso de JS, y nuevo curso ";
var texto2 = "es muy buen curso"

//convertir numero a texto
var dato = numero.toString();

console.log(numero, dato, typeof numero, typeof dato);

// convertir texto a mayusculas toUpperCase
console.log(texto1.toUpperCase());

//Convertir a minusculas toLowerCase
console.log(texto1.toLowerCase());

//calcular logitud/contar numero de elementos de algo length.
console.log(texto1.length);

//concatenar
var textoTotal = texto1+texto2;
console.log(textoTotal);
console.log(texto1.concat(" " + texto2));

//busquedas de texto indexOf - lastIndexOf - search - match
console.log(texto1.indexOf("curso"));
console.log(texto1.lastIndexOf("curso"));
console.log(texto1.search("curso"));
console.log(texto1.match("curso"));
console.log(texto1.match(/curso/gi));
console.log(texto1.match(/curso/g));

// extraer porcion de texto.
console.log(texto1.substr(10,7));

//extraer una letra de una posicion espeficica
console.log(texto1.charAt(15));

//encontrar un string que empiece por
console.log(texto1.startsWith("Bi"));

//encontrar un string que termine por
console.log(texto1.endsWith("so"));

//encontrar un includes que tenga. es sentitivo
console.log(texto1.includes("Js"));
console.log((texto1.toLowerCase()).includes("Js"));

//reemplazar un texto
console.log(texto1.replace("JS","JavaScript"));

//cortar todo un string slice
console.log(texto1.slice(14,22));

//recortar palabras split
console.log(texto1.split());
console.log(texto1.split(" "));
console.log(texto1.split("e"));

//quitar espacios en blanco trim
console.log(texto1.trim())