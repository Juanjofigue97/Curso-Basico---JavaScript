// operaciones y redondeo

let a = 3.5;
let b = 4.8;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

// Representacion de los numeros en cadenas de texto

console.log(typeof(a));
console.log(typeof(a.toString()));
//

let c = 3.3;
let d = c*3;

console.log(d);
console.log(typeof d);


// to.Fixed
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

// to.Precision(x)

let e = 15467.56234234234;

// Limita el numero de cifras significativas
console.log(e.toPrecision(3));


