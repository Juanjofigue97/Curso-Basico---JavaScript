// Funciones anonimas, funciones tipo fecha

const array = [1, 5, 6, 7, 8, 12, 8,92];

const array2 = array.map(valor =>valor * 2);

console.log(array2);

// const dobleDelValor = valor => {
//     return valor * 2
// }

// funcion anonima
const dobleDelValor = valor=>valor*2

function doble(valor){
    return valor*2
}

const array3 = array.map(dobleDelValor)

console.log(dobleDelValor(6))
console.log(doble(5))

console.log(array3)