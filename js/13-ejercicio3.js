'use strict'

/*
hacer un programa que muestre todos los numeros en el intervalo de 2 numero 
introduccions
*/
console.log("Ejercicio 3");

var numero1 =0;
var numero2 =0;

do{
	numero1 = parseInt(prompt("Ingre el valor inicial"));
	if (isNaN(numero1)) {
		alert("Dato invalido");
	}

}while(isNaN(numero1));

do{
	numero2 = parseInt(prompt("Ingre el valor final"));
	if (isNaN(numero2)) {
		alert("Dato invalido");
	}
}while(isNaN(numero2));
var cont=0;
console.log("Valor inicial: " + numero1 + " valor final: " + numero2);
for(var i=numero1;i<=numero2;i++){
	console.log(i);
	cont++;
}
console.log(cont);