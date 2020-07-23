'use strcit'

console.log("36-fetch.js");
console.log("Fetch es una peticion AJAX a servicios/apis rest");

var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");
fetch("https://reqres.in/api/users?page=2")
.then(function (data){
	return data.json()
})
.then(users =>{
	usuarios = users.data;
	console.log(usuarios);
	usuarios.map((user, i) =>{
		let nombre = document.createElement("h4");
		nombre.innerHTML = i + " - " + user.first_name ;
		div_usuarios.appendChild(nombre);
		//document.querySelector(".loading").style.display = "none";
		document.querySelector("#cargando").style.display = "none";
	});
})
