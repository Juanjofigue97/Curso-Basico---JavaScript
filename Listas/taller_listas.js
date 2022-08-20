// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const  listaCompra = ['Leche','huevos','pan','cereal','papel'];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

console.log(listaCompra);
listaCompra.push("Aceite de Girasol")
console.log(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

console.log(listaCompra);
listaCompra.pop("Aceite de Girasol")
console.log(listaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// '18 de diciembre de 2009' new Date(year, month, day, hours, minutes, seconds, milliseconds)
const peliculasfavoritas = [
    { titulo: "Avatar", director:'James Cameron', fecha: new Date(2009,11,18)},
    { titulo: "Gladiador", director:'Rowdy Herrington', fecha: new Date(1992,6,12)},
    { titulo: "Baby Driver",director:'Edgar Wright', fecha:new Date(2017,2,11)}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const filtro = new Date(2010,0,1)

const pelis = peliculasfavoritas.filter(valor =>  valor.fecha.getTime() > filtro.getTime())

// Solucion -> const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

// const fecha = new Date(2010,0,1);
// console.log(fecha.getTime());

console.log(pelis);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculasfavoritas.map(valor => valor.director);
console.log(directores);


// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = peliculasfavoritas.map(valor => valor.titulo);
console.log(titulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const directoresTitulos = directores.concat(titulos);
console.log(directoresTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const directoresTitulos2 = [...directores, ...titulos];
console.log(directoresTitulos2);