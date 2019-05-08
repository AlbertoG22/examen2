

var punto = new Punto();
var btnAgregar = document.getElementById("calcularDistancia");
btnAgregar.addEventListener("click", accion);

function accion(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    var distanciaTotal= punto.getDistancia(x,y)
    document.getElementById("distancia").innerHTML= ('La distancia final es: '+ distanciaTotal);
}