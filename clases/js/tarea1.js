
function calcularModulo(vector) {
    return Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2);
}

function calcularDireccion(vector) {
    const modulo = calcularModulo(vector);
    return {
        x: vector.x / modulo,
        y: vector.y / modulo,
        z: vector.z / modulo
    };
}

const x1 = parseFloat(prompt("Ingrese la coordenada x del vector U:"));
const y1 = parseFloat(prompt("Ingrese la coordenada y del vector U:"));
const z1 = parseFloat(prompt("Ingrese la coordenada z del vector U:"));

const x2 = parseFloat(prompt("Ingrese la coordenada x del vector V:"));
const y2 = parseFloat(prompt("Ingrese la coordenada y del vector V:"));
const z2 = parseFloat(prompt("Ingrese la coordenada z del vector V:"));


const U = { x: x1, y: y1, z: z1 };
const V = { x: x2, y: y2, z: z2 };


const moduloU = calcularModulo(U);
const moduloV = calcularModulo(V);


const direccionU = calcularDireccion(U);
const direccionV = calcularDireccion(V);

console.log("El módulo del vector U es:", moduloU);
console.log("El módulo del vector V es:", moduloV);
console.log("La dirección del vector U es:", direccionU);
console.log("La dirección del vector V es:", direccionV);