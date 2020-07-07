'use strict'

/*
programa que pida al usuario 2 numeros, se debe determinar cual es mayor, 
menor o si son iguales.
NOTA: Si los datos ingresados no son numero, se deben solicitar nuevamente
*/

var numero1 = parseInt(prompt("Ingrese el numero 1"));

while((numero1 <= 0 || isNaN(numero1))){
	numero1 = parseInt(prompt("Ingrese el numero 1"));
}	
do{
	var numero2 = parseInt(prompt("Ingrese el numero 2"));
}while(numero2 <= 0 || isNaN(numero2))

var impresion = " ";

if(numero1 > numero2){
	impresion = "Numero 1 " + numero1 + " es mayor que el numero 2 " + numero2;
}else{
	impresion = "Numero 2 " + numero2 + " es mayor que el numero 1 " + numero1;
}
if (numero2 == numero1) {
	impresion = "EL numero 1 " + numero1 + " y el numero 2" + numero2 + " son iguales"; 
}

console.log(impresion);
alert(impresion);