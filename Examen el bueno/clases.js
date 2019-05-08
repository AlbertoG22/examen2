class Punto{
    constructor(x,y){
        this.x=0;
        this.y=0;
        this.distancia=0;
    }
    
    getDistancia(x,y){
        if (this.x==0 && this.y==0) {
            this.x=x;
            this.y=y;
            return this.distancia;
        }
        else{
            var restaX=(x-this.x);
            var restaY=(y-this.y);
            this.distancia+=Math.sqrt((Math.pow(restaX, 2)) + (Math.pow(restaY,2)));
            this.x=x;
            this.y=y;
            return this.distancia;
        }
    }
}