'use strict'

// funciones anonimas
//Son aquellas que no se definen con un nombre

function sumar(numero1, numero2, sumaYmuestra, sumaPorDos){
	var suma=numero1+numero2;
	sumaYmuestra(suma);
	sumaPorDos(suma);
	return suma;
}

sumar(5,2, function(dato){
	console.log(" suma = " + dato);
}, function(dato){
	console.log("Suma por 2 = " + dato*2)
});