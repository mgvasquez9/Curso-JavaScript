'use strict'

//eventos timer son usandos para que se ejecuten instrucuines de codigo de manera repetitiva

console.log("Timer")

var color;
var hexadecimal = new Array("red","yellow","white","black","green","gray","brown","orange","purple","cian","blue");
   var color_aleatorio  ;// = "#";
    var posarray ;
function dame_color_aleatorio(min,max) {
   return color_aleatorio = hexadecimal[Math.floor(Math.random() * (max - min)) + min];
}


window.addEventListener('load', function(){


	//setInterval --> se ejecuta cada cierto tiempo
	// setInterval(function(){}, parametro) ; parmatro tiempo en milisegundos
	var tiempo ;
	var tiempo2 ;
	var encabezado = document.querySelector("h1");//encontrar la primera etiqueta h1 en indez
	// tiempo = setInterval(function(){
		
	// 	dame_color_aleatorio(0,hexadecimal.length);
	//     encabezado.style.color = color_aleatorio;
	// },3000);
	//settimeout --> se ejecuta una sola vez
	var tiempo2 = setTimeout(function(){
		dame_color_aleatorio(0,hexadecimal.length);
		encabezado.style.color  = color_aleatorio;
	},500);

});
