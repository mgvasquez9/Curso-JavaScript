'use strict'
console.log("eventos");

//load  este evento permite cargar los script antes de cargar toda la pagina y no genere un error

window.addEventListener('load', function(){
	

function cambiarColor(){

}
var color;
var hexadecimal = new Array("red","yellow","white","black","green","gray","brown","orange","purple",);
   var color_aleatorio  ;// = "#";
    var posarray ;
function dame_color_aleatorio(min,max) {
   
   // for (var i=0;i<6;i++){
   //    posarray = Math.random(0,hexadecimal.length);
   //    console.log(posarray);
   //    color_aleatorio += hexadecimal[posarray];
   // }
   //return color_aleatorio =Math.random(min,max) * (max- min) + min;
   return color_aleatorio = hexadecimal[Math.floor(Math.random() * (max - min)) + min];
}

//se debe capturar el elemento por medio de una variable
var boton = document.querySelector("#boton");
//eventos del raton click, mouseover, mouseout
//click sobre el boton
boton.addEventListener('click', function(){
	dame_color_aleatorio(0,hexadecimal.length);
	boton.style.background =color_aleatorio;
	dame_color_aleatorio(0,hexadecimal.length);
	boton.style.color =color_aleatorio;
	//console.log(color_aleatorio);
});

//mouse over mouse pasa sobre el boton
boton.addEventListener('mouseover',function(){
	dame_color_aleatorio(0,hexadecimal.length);
	boton.style.color = color_aleatorio;
	dame_color_aleatorio(0,hexadecimal.length);
	boton.style.color =color_aleatorio;
})

boton.addEventListener('mouseout',function(){
	dame_color_aleatorio(0,hexadecimal.length);
	boton.style.color = color_aleatorio;
	dame_color_aleatorio(0,hexadecimal.length);
	boton.style.color =color_aleatorio;
})

//eventos del teclado
//focus, blur, keydown, keypress, keyup

//se debe capturar el elemento por medio de una variable
var input = document.querySelector("#camponombre");


//focus, cuando se pociosona sobre el elemento
input.addEventListener('focus', function(){
	console.log("Ingreso al elemento ");
});

//blur indica cuando se sale de un elemento
input.addEventListener('blur', function(){
	console.log("salio del elemento ");
});

//keydown, indica cuando se presiona una tecla en un elemento, se puede saber que tecla exactamente
// input.addEventListener('keydown', function(){
// 	console.log("presiono una tecla en el elemento ");
// });

input.addEventListener('keydown', function(event){
	console.log("unde una tecla  ", String.fromCharCode(event.keyCode));
});

//keyprees cuando se pressiona una tecla
//keyup ccuando se des-unde unatecla


})