

class Punto{
    constructor(coordenadas){
        this.distancia=coordenadas;
    }
    
    calcularDistancia(datos){
        var x1 = document.getElementById("x1").value;
        var y1 = document.getElementById("y1").value;
        var x2 = document.getElementById("x2").value;
        var y2 = document.getElementById("y2").value;

        var punto1=(x2-x1);
        var punto2=(y2-y1);

        var resultadoTotal = Math.sqrt(Math.pow(punto1, 2) + Math.pow(punto2, 2));
        document.getElementById("distancia").innerHTML=resultadoTotal
    }
}

