// Manipulacion de cadenas de texto
let input = "Cuando El perro se encontró un pedazo de carne lo agarró y se alejó para comérselo tranquilamente";
let password = 'juanjoFigueroa124';

// tolowerCase - touppercase
console.log(input.toLowerCase());
console.log(password.toUpperCase());

// Formas de concatenar dos cadenas de caracteres

let str_1 = "hola soy la cadena una";
let str_2 = "soy la segunda";

console.log(str_1+ " "+str_2)

console.log(str_1.concat(" ",str_2, "\nEjemplo"));

console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final

let str_3 = "  hola soy un string con espacios al final.   ";
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion

let str_4 = "hola soy el string numero 4"

console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posicicon de una palabra dentro de una cadena de caracteres

console.log(str_4.indexOf("el"));
console.log(str_4[9]);
console.log(str_4.indexOf("string"));
