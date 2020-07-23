'use strict'

console.log("35-ejercicio-localstorage.js");
var formulario = document.querySelector("#formpeliculas");
formulario.addEventListener("submit",function(){
	console.log("prueba añadir");
		var titulo = document.querySelector("#addpelicula").value;
		if(titulo.length > 0){
			localStorage.setItem(titulo,titulo);
		}else{
			alert("Nombre no valido");
		}
		
	});

var ul = document.querySelector("#peliculas-list");
for(var i in localStorage){
	if(typeof localStorage[i] == "string"){
		var li = document.createElement("li");
		li.append(localStorage[i]);
		ul.append(li);
	}
}
var formulariob = document.querySelector("#formBorrarPeliculas");
formulariob.addEventListener("submit",function(){
	console.log("prueba borrar");
		var titulo = document.querySelector("#borrarPelicula").value;
		 
			localStorage.removeItem(titulo);
		 
		
	});
var botonBorrar = document.querySelector("#borrarTodo")
botonBorrar.addEventListener("click",function(){
localStorage.clear();
});