'use strtic'

//FUnciones
//Es una agrupacion reutilizable de instruciones
var resultado = 0;
function calculadora(numero1, numero2, operacion){
	
	switch(operacion){
		case "+":
		resultado = (numero1 + numero2);
		break;
		case "-":
		resultado = (numero1 - numero2);
		break;
		case "*":
		resultado = (numero1 * numero2);
		break;
		case "/":
		resultado = (numero1 / numero2);
		break;
	}
	return resultado;
}







console.log(calculadora(2,5,"+"))
console.log(calculadora(2,5,"-"))
console.log(calculadora(2,5,"*"))
console.log(calculadora(2,5,"/"))
