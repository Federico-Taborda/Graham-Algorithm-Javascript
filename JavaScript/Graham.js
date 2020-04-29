class Graham {
    constructor(puntos) {
        this.puntos = puntos;
        this.puntosOrdenados = [];
        this.puntoOrigen = this.buscarOrigen();
    };

    /* Busca el origen en la lista de punto (con mayor Y y menor X) */
    buscarOrigen() {
        let origen = this.puntos[0];
        
        this.puntos.map((node) => {
            if(node.y > origen.y && node.x < origen.x){
                origen = node;
            };
        });

        return this.puntoOrigen = origen;
    };

    /* Ordena los puntos de manera creciente por su angulo al origen */
    quickSort(arr){
        if(arr.length < 1){
            return [];
        };
    
        let left = [];
        let right = [];
        let pivot = arr[0];
    
        for(let i = 1; i < arr.length; i++){
            if(arr[i].angulo < pivot.angulo){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            };
        };
    
        return [].concat(this.quickSort(left), pivot, this.quickSort(right));
    };

    /* Cacula el angulo de tres puntos */
    calcularAngulo(p1, p2, p3) {
        return (p3.x - p2.x) * (p2.y - p1.y) - (p2.x - p1.x) * (p3.y - p2.y);
    };

    /* Elimina un punto de la lista */
    eliminarPuntoDeLista(punto, lista) {
        lista.map((point, index) => {
            if(punto.nombre == point.nombre) {
                lista.splice(index, 1);
            };
        });

        return lista;
    };

    /* Calculara los puntos necesarios para la envolvente */
    cierreConvexo() {
        this.puntosOrdenados = this.quickSort(nodos);
        /* Se crea una pila que contendra los puntos de la envolvente */
        let stack = [];

        /* Asigna el punto origen al principio y final de la lista ordenada */
        this.eliminarPuntoDeLista(this.puntoOrigen, this.puntosOrdenados);
        this.puntosOrdenados.unshift(this.puntoOrigen);
        this.puntosOrdenados.push(this.puntoOrigen);
        this.puntosOrdenados.push(this.puntosOrdenados[1]);

        let inicial = stack[0] = this.puntosOrdenados[0];
        let medio = stack[1] = this.puntosOrdenados[1];
        let final = stack[2] = this.puntosOrdenados[2];

        /* Evalua los tres ultimos angulos */
        for(let i = 3; i < this.puntosOrdenados.length; i++) {
            let angulo = this.calcularAngulo(inicial, medio, final);
            
            if(angulo == 0) {
                stack.push(this.puntosOrdenados[i]);
                inicial = medio;
                medio = final;
                final = this.puntosOrdenados[i];
            }else if(angulo > 0) {
                this.eliminarPuntoDeLista(medio, stack);
                stack.push(this.puntosOrdenados[i]);
                medio = final;
                final = this.puntosOrdenados[i];
            }else if(angulo < 0) {
                stack.push(this.puntosOrdenados[i]);
                medio = final;
                final = this.puntosOrdenados[i];
            };
            
            /* Evalua si todos los puntos del stack son coolineales si no borra los sobrantes */
            for(let j = 0; j < stack.length; j++) {
                if((j + 3) < stack.length) {
                    let angulo2 = this.calcularAngulo(stack[j], stack[j + 1], stack[j + 2]);
                    if(angulo2 > 0) {
                        this.eliminarPuntoDeLista(stack[j + 1], stack);
                    };
                };
            };
        };

        return stack;
    };

    /* Dibuja el trazado entre punto y punto */
    async dibujarCierreConvenxo() {
        let convexo = this.cierreConvexo();

        for(let j = 0; j < convexo.length; j++) {
            if((j + 1) < convexo.length) {
                await this.dibujado(convexo, j, 500);
                /* convexo[j].dibujarTrazado(convexo[j + 1]); */
            };
        };

        console.log("Envolvente convexa completada");
    };

    /* Ejecutador de animacion */
    dibujado(lista, count, time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(lista[count].dibujarTrazado(lista[count + 1]));
            }, time);
        });
    };
};

        
