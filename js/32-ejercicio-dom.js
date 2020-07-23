'use strict'

console.log("Ejercicio 32");

window.addEventListener("load", function(){
	var fomulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display="none";


	fomulario.addEventListener("submit",function(){
		console.log("Evento submit capturado");
		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = document.querySelector("#edad").value;

		console.log(nombre,apellidos,edad);
		box_dashed.style.display ="block";

		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellido = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");
		 
		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad ;
		//otra forma de hacerlo
		// var datos_usuario = [nombre,apellidos,edad];
		// var indice;
		// for (indice in datos_usuario){
		// 	var parrafo = document.createElement("p");
		// 	parrafo.append(datos_usuario[indice]);
		// 	box_dashed.append(parrafo);
		// }


	});

});
