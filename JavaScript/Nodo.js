class Nodo {
    constructor(Nombre){
        this.nombre = Nombre;
        this.x = Math.floor(Math.random() * ((canvas.width - 50) - 50) + 50);
        this.y = Math.floor(Math.random() * ((canvas.height - 50) - 50) + 50);
        this.radio = 5;
        this.angulo;
    };

    dibujarNodo(){
        ctx.fillStyle = "#c0392b";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "#ecf0f1";
        ctx.fillText(this.nombre, this.x - 3, this.y - 10);
    };

    dibujarTrazado(punto){
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#c0392b";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(punto.x, punto.y);
        ctx.stroke();
    };

    /* Calcula el angulo entre el punto origen y un punto en la lista */
    calcularAngulo(punto){
        return this.angulo = Math.atan2(punto.y - this.y, punto.x - this.x);
    };
};