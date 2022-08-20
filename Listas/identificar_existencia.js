// .some()

const array = [2, 7, 7,4 , 4,6,7,8,9, 2,3,23, -4];

const res = array.some(valor => valor < -0)

console.log(res);

const existe = array.some(valor => valor === 7);
console.log(existe);

const listaObjetos = [
    { nombre: "Leire", edad:35 },
    { nombre: "Gorka", edad:34 },
    { nombre: "Miguel",edad:28 },
    { nombre: "Lucia", edad:3  },
    { nombre: "Amaia", edad:29 }
];

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel" )

console.log(existeMiguel);

// como obtener una lista a partir de un objeto iterable

const str = "Hola soy Juan";

console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2,3,"hola",4]);
console.log(set);
const ar_set = Array.from(set);
console.log(ar_set);


const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys)


