'use strict'

/*
Hacer un programa en JS que realice los siguientes pasos
1. Debe pedir 6 numero por pantalla y guardarlos en un array.
2. Mostrar todos los elementos en el cuerpo y en la consola.
3. Ordenarlo y mostrarlo.
4. invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el array.
6. Buscar un valor introduccido por el usuario, debe decir si lo encuentra 
y en que indice se encuentra

*/
//paso 1
var numeros = new Array;
for(var i = 0 ; i<=5 ; i++){
	do{
		numeros[i]= parseInt(prompt("ingrese un numero " + (i+1)));
	}while(isNaN(numeros[i]));
	
	
}

//paso 2
// for(var i =0 ; i<numeros.length ;i++){
// 	console.log(numeros[i]);
// 	document.write(numeros[i]);
// }

document.write("<ul>");
for (let numero in numeros) {
	document.write("<li>" + numeros[numero] + "</li>");
	console.log(numeros[numero]);
}
document.write("</ul>");
//paso 3
console.log("Array puro: " + numeros);
//paso 4
var inverso = numeros.reverse();
console.log("Array inverso: " + inverso);

var orden = numeros.sort();
console.log("Array ordenado: " + orden);

var orden1 = numeros.sort(function (a,b){return a-b});
console.log("Array ordenado  ascedente: " + orden1);



//paso 5
var cantidad = numeros.length;
console.log("La cantidad de elementos en el arreglo es: " + cantidad );

//paso 6
var numeroBuscar;
var busquedad ;
var indice ;

do{
		numeroBuscar= parseInt(prompt("ingrese el numero a buscar en el arreglo"));
	}while(isNaN(numeroBuscar));

indice = numeros.findIndex(function(num){
	return num == numeroBuscar;
});
if(indice ==-1){
	console.log("El numero " + numeroBuscar + " NO se encuentra en el arreglo");
}else{
	console.log("El numero " + numeroBuscar +" se encuentra en el arreglo: " + numeros + " en la posicion " + indice);
}