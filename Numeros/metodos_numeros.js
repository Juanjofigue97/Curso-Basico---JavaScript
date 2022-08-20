// Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a+b);
console.log(a.valueOf()+b.valueOf());

console.log(b.valueOf());

let str = new String("hola soy un string");

console.log(str);
console.log(str.valueOf());

// NaN - Infinity

let n = Number('adios');
console.log(isNaN(n));

let numerador = 10;
let divisor = 0;
console.log(numerador/divisor);

let divisor_2 = null;
console.log(numerador/divisor_2);

// Como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = '5.891313';
let num2 = 17.2;

console.log(Number(numero) + num2);
console.log(parseFloat(numero));

let num3 = 4;

// Numeros Hexadecimales (16)

let numHex = '0x3a5b7';

console.log(parseInt(numHex));

// Obtener el valor maximo y minimo 

let min_precision = Number.EPSILON;
let min_valor_Js = Number.MIN_VALUE;
let max_valor_Js = Number.MAX_VALUE;

console.log(min_precision,min_valor_Js,max_valor_Js)


