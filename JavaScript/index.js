let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext('2d');

const nodos = [
    A = new Nodo("A"),
    B = new Nodo("B"),
    C = new Nodo("C"),
    D = new Nodo("D"),
    E = new Nodo("E"),
    F = new Nodo("F"),
    G = new Nodo("G"),
    H = new Nodo("H"),
    I = new Nodo("I"),
    J = new Nodo("J"),
    K = new Nodo("K"),
    L = new Nodo("L"),
    M = new Nodo("M"),
    N = new Nodo("N"),
    O = new Nodo("O"),
    P = new Nodo("P"),
    Q = new Nodo("Q"),
    R = new Nodo("R"),
];

let graham = new Graham(nodos);

nodos.map((node) => {
    node.dibujarNodo();
    node.angulo = graham.puntoOrigen.calcularAngulo(node);
});

graham.dibujarCierreConvenxo();







/* console.table(graham.puntosOrdenados); */
