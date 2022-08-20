// Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["San Sebastain", "Madrid", "Barcelona", "Alicane", "Bilbao"];

const newArray = array.map((valor,i) =>`${i + 1} - ${valor}`);

console.log(newArray);

// Filter


const listaObjetos = [
    { nombre: "Leire", edad:35 },
    { nombre: "Gorka", edad:34 },
    { nombre: "Miguel",edad:28 },
    { nombre: "Lucia", edad:3  },
    { nombre: "Amaia", edad:29 }
]

// const persnasM = listaObjetos.filter(valor =>{
//     if(valor.edad > 30){
//         return true
//     }else{
//         return false
//     }
// } )

const persnasM = listaObjetos.filter(valor => valor.edad > 30);
console.log(persnasM);

const newlist = listaObjetos.filter(obj => obj.nombre !== "Miguel");
console.log(newlist);

const valores = [3,56,23,5,90,100];
const suma = valores.reduce((acumulado,cur,i,arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})

console.log(suma)