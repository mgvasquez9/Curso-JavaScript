'use strict'
console.log("eventos");

function cambiarColor(){

}
var color;
var hexadecimal = new Array("red","yellow","white","black","green","gray","brown","orange","purple",);
   var color_aleatorio = "#";
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

var boton = document.querySelector("#boton");

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