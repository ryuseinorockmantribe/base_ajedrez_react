class Tetrimino {
    constructor(){
        this.posicion = createVector(0,1);
    }

    dibujar(){
        push();
        fill("red");
        let coord = tablero.coordenada(this.posicion.x,this.posicion.y);
        rect(coord.x,coord.y,10)
        pop();
    }
}