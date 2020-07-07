'use strict'
/*mostrar todos los numero impares que existan entre 2 numeros 
ingresados por el usuario*/
console.log("Ejercicio 4")

do{
	var numeroInicio = parseInt(prompt("Ingrese el numero inicial"));
	if(isNaN(numeroInicio)){
		alert("Ingrese un numero valido");
	}
}while(isNaN(numeroInicio));

do{
	var numeroFin = parseInt(prompt("Ingrese el numero final"));
	if(isNaN(numeroFin)){
		alert("Ingrese un numero valido");
	}
}while(isNaN(numeroFin));

for(var i = numeroInicio; i<=numeroFin;i++){
	if((i%2)!=0){
		console.log(i);
	}
}

