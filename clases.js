
class Coordenadas{
    constructor(x1,y1,x2,y2){
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
    }
    set X1(valor){
        this.x1=valor;
    }
    set X2(valor){
        this.y1=valor;
    }
    set X2(valor){
        this.x2=valor;
    }
    set Y2(valor){
        this.y21=valor;
    }
    get X1(){
        return this.x1;
    }get Y1(){
        return this.y1;
    }get X2(){
        return this.x2;
    }get Y2(){
        return this.y2;
    }
}


class Punto{
    constructor(){
        this.distancia=0;
    }
    agregarCoordenadas(nuevo){
        if(this.x2!=null && this.y2!=null){
            this.calcularDistancia(datos)
        }
        else{
            //console.log("agrega los demás")
        }
    }
    calcularDistancia(datos){
        this.distancia=
    }
}