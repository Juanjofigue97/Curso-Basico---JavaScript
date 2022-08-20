// .sort() "Ordenar"

const array = [7,6,3,1];

console.log(array);

array.sort((a,b) => {
    console.log(a,b);
    if(a < b){
        return -1
    }else if (a > b){
        return +1
    }else{
        return 0
    }
});

console.log(array);

const arrayNumericos = [4,1,7,3,1,3,56,1,546];

arrayNumericos.sort((a,b) => a-b);
console.log(arrayNumericos);
//// interesante en array de objetos

const listaObjetos = [
    { nombre: "Leire", edad:35 },
    { nombre: "Gorka", edad:34 },
    { nombre: "Miguel",edad:28 },
    { nombre: "Lucia", edad:3  },
    { nombre: "Amaia", edad:29 }
];


listaObjetos.sort((a,b) => a.edad - b.edad);

console.log(listaObjetos)

