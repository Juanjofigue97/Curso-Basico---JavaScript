// Comparaciones 

// Igualdad

if (5 == 5){
    console.log("5 es igual a 5");
}

let a = 5;
console.log(typeof(a))

let b = "5";
console.log(typeof(b))

// == solo compara el valor
// === compara el valor y el tipo

if(a==b){
    console.log("A es igual a b")
}

if(a === b){
    console.log("A es igual a b")
}

// Desigualdad !=

let c = 4;
let d = "4";

if(c != d){
    console.log("A es igual a b")
}

if(c !== d){
    console.log("A es igual a b")
}


// Comparaciones mayor que y menor que 

let max = 10;
let min = 5;

if(max > min){
    console.log("max es mayor que min")
}

if(max >= 10){
    console.log("max es mayor o igual que min")
}


if(min < max){
    console.log("min es menor que max")
}

if(min <= min){
    console.log("min es menor o igual que max")
}