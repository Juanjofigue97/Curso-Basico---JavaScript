// Trabajando con objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "figueroa",
    isDeveloper: true,
    librosFavoritos: ['el metodo','el secreto','Elixir llamado amor'],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj["4-juegos"][3]);

const prop = "4-juegos";

console.log(obj[prop][0]);

// Cambian el espacio de memoria 
const obj2 = obj;

console.log(obj2);

obj2.nombre = "Jose";
console.log(obj2.nombre);

// Asignar diferente direccion de memoria

const obj3 = {...obj}

obj3.nombre = 'Ricardo';

console.log(obj3.nombre);

//// Como ordenar listas de objetos en funcion de una propiedad


const listaPeliculas = [
    {titulo: "lo que el viento se llevo", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2012},
    {titulo: "TED", anyo: 2012}
];

console.log(listaPeliculas);

listaPeliculas.sort((a,b) => a.anyo - b.anyo); // organizar listas por año


console.log(listaPeliculas);
