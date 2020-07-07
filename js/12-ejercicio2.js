'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introduciir un numero negativo y ahi mostrar el resultado
*/

var numero=0 ;
var media=0 ;
var suma=0;
var contador=0;

do{
	numero = parseInt(prompt("Ingrese un numero"));
	if(isNaN(numero)){
		alert("El dato introducido no es un numero");
		numero=0;
	}else if(numero>=0){
		suma= suma+numero;
		contador = contador+1;
		
	}else if(numero<0){
		alert("Ha ingresado un numero negativo");
	}
	console.log(numero,contador);
}while (numero>=0)
media=suma/contador;
console.log(typeof (media));
console.log("suma: " + suma+ "Contador: "+contador + " Media: " + media);
