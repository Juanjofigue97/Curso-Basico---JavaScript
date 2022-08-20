// Ejercicio

let altura = 173;
let peso = 72.8;

console.log(`Mi altura en cm es: ${altura} cm`);
console.log(`Mi altura en cm es: ${altura/100} m`);
console.log(`Mi peso en kg es: ${peso.toFixed()} kg`);
console.log(`Mi altura en cm es: ${(altura/100).toFixed(1)} m`);
console.log(`Mi peso en kg es: ${(peso-1).toFixed()} kg`);

const altura_red = Math.ceil(16.7);
const peso_red = Math.floor(16.2);


const max_valor_Js = Number.MAX_VALUE + 1 === Number.MAX_VALUE ;

console.log(max_valor_Js);