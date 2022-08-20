const lista1 = ["hola",2,false,null];
const lista2 = ["adios",8,true,undefined];

console.log(lista1.concat(lista2));
console.log(lista1);

const lista3 = lista1.concat(lista2);
console.log(lista3);

console.log(...lista3);

// Factor de Propagacion

const lista4 = [...lista1, ...lista2];
console.log(lista4);

// Error mal entendio el concepto del factor de propagacion

const lista5 = [lista1,lista2];
console.log(lista5);

// Como obtener una lista apartir de otra

const array = ["hola",1,2,3,true,null,"adios"];

// NO modifica el valor del array original
// array.slice(start,end) * indices
console.log(array.slice(1,5));

const array2 = array.slice(2,5);

console.log(array2);

const array3 = array.slice(2,-2)
console.log(array3);

