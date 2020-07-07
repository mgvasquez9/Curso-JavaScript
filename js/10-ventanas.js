console.log("Prueba ventanas");

/*
Ventanas se usan para 
existen 3 tipos de ventanas 
1. Alertas
2. Confirmacion
3. Ingreso de datos
*/

//alertas alert

//Ingreso de edad prompt
var edad = prompt("Digite la edad", 18);


if (Number(edad) >= 18) {
 	//confirmacion confirm
	var cofirmaContenido = confirm("Contenido para mayores de 18 años");
	if(cofirmaContenido == true){
		alert("Usted vera imagenes de productos exclusivo para adultos");
	}else{
		alert("Usted ha cancelado la solicitud");
	}
}
