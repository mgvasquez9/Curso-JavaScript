'use strict'
//Local storage permite guardar datos en la memoria del navegador, si esta disponoible
//key, valor
console.log("34-localstorage.js");

if(typeof(Storage) !== "undefined"){
	console.log("Disponibilidad de localstorage");
}else{
	console.log("No hay Disponibilidad de localstorage")
}


//Guardar datos en local storage
//variables
localStorage.setItem("titulo","Curso de JavaScript Miguelon")

//objetos
var persona ={
	nombre:"Miguel",
	apellidos:"Gonzalaz Vasquez",
	edad:29,
	sexo:"Masculino",
	estadoCivil:"Soltero"
}
localStorage.setItem("persona", JSON.stringify(persona));


//recuperar datos desde local storage
//variable
document.querySelector("#peliculas").innerHTML =  localStorage.getItem('titulo');

//objeto
console.log(localStorage.getItem('persona'));
var persona = JSON.parse(localStorage.getItem('persona'))
console.log(persona);
console.log(localStorage.getItem('persona'));

//eliminar un elemento del local storage
localStorage.removeItem("persona");

//eliminar todo el contenido de localStorage
//localStorage.clear();