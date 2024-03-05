Math.PI
Math.abs
Math.round
Math.floor
Math.ceil
Math.pow
Math.sqrt

let X1 = parsefloat(prompt("ingrese x1", 0));
let X2 = parsefloat(prompt("ingrese x2", 0));

let Y1 = parsefloat(prompt("ingrese y1", 0));
let Y2 = parsefloat(prompt("ingrese y2", 0));

let Q = [X1,X2];
let P = [Y1,Y2];

let resultado;

resultado = Math.sqrt(((Q[0]-P[0])**2)+(Math.pow(Q[1]-P[1])**2))

console.log("el resultado es"+resultado);
console.log("uytss",resultado);


