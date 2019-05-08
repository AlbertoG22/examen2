

var punto = new Punto();
var agrgar1 = document.getElementById("agregar1");
//var agrgarY = document.getElementById("agregarY");
agregar1.addEventListener("click", accion);

function accion(){
    //console.log('sí entró')
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;

    var datos = new Coordenadas(x1,y1,x2,y2);
    punto.agregarCoordenadas(datos);
    console.log(punto)
}