

class Tablero {
  constructor() {
    this.columnas = 10;
    this.filas = 20;
    this.lado_celda = 25;
    this.ancho = this.columnas * this.lado_celda;
    this.alto = this.filas * this.lado_celda;    
    this.posición = createVector(0,0);
  }


  coordenada(x, y) {
    return createVector(x, y).mult(this.lado_celda).add(this.posición);
  }


  dibujar() {

    for (let columna = 0; columna < this.columnas; columna++) {
      for (let fila = 0; fila < this.filas; fila++) {

        let c = this.coordenada(columna, fila);
        rect(c.x, c.y, this.lado_celda);
      }
    }

  }


}