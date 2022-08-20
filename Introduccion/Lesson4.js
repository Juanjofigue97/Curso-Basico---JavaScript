// Listas

const lista = [1,"hola",true, undefined,null];
const lista2 = new Array(2,"hola",true, undefined,null);
const lista3 = new Array(3);

lista3[0] = "soy el primer objeto";

const lista4 = [lista,lista2,lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


// Objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka","Martin","Raul"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}

movil.fecha = 2019;
movil.marca = "Samsung";

console.log(movil.tarjeta.marca);
console.log(movil.marca);

// Fechas 
// Librerias de apoyo moment.js

const ahora = new Date();

console.log('ahora :>> ', ahora);

const fecha_milis = new Date(10);

console.log('fecha_milis :>> ', fecha_milis);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log('dia,mes,anyo :>> ', dia,mes,anyo);