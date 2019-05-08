

var punto = new Punto();
var calcularDistancia = document.getElementById("agregar1");
//var agrgarY = document.getElementById("agregarY");
calcularDistancia.addEventListener("click", accion);

function accion(){

    punto.calcularDistancia();
    console.log(punto)
}