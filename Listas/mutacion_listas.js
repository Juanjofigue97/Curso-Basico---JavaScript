// Como trabajar con listas (arrays, arreglos, vectores...)
var var1 = 2;

let arrays = [1,"Hola",false,{id:5,solucion:2},null, undefined, var1];

console.log(arrays);

console.log(arrays[0]);
console.log(arrays[1]);


// Metodos para introducir nuevos valores
//.push() . unshift => mutan el valor de nuestro array

arrays.push("final",2,4);
console.log(arrays);

// principio

arrays.unshift(2,5,6);
console.log(arrays);

// Eliminar valores 

// .pop .shift => Mutan el valor de nuestro array

const arrays2 = [1,4,"hola", false];
arrays2.pop();
console.log(arrays2);
arrays2.pop();
console.log(arrays2);

const array3 = [1,2,3,4,5,6,7];

array3.splice(2,3); // splice (indice, # de valores a eliminar)

console.log(array3);

// Añadir valores

array3.splice(2,0, "hola",3,5,6,1);
console.log(array3);

// Modificar

array3.splice(2,1,3);
console.log(array3);





