// Bifurcaciones if ... else

let saldo = 50;
let efectivo = 70;

if (efectivo < saldo ){
    console.log("Puedes sacar dinero")
}

if (efectivo < saldo ){
    console.log("Puedes sacar dinero")
} else {
    console.log("Saldo insuficiente");
}

// if, elif, else

let nota = 2;

if(nota === 5){
    console.log("Enhorabuena, has obtenido un sobresaliente")
}else if(nota === 4){
    console.log("Buen trabajo, pero lo podias hacer mejor");
}else if(nota === 3){
    console.log("Buen trabajo, pero lo podias hacer mejor");
}else if(nota === 2){
    console.log("Buen trabajo, pero lo podias hacer mejor");
}else if(nota === 1){
    console.log("Buen trabajo, pero lo podias hacer mejor");
}else{
    console.log("Error entroduce entre el 1 y el 5");
}

// Swtich

let nota1 = 5;

switch (nota){
    case 5:
        console.log("Buen trabajo, sobresaliente!");
        break;
    case 4:
        console.log("Buen trabajo, pero lo podias hacer mejor");
        break;
    case 3:
        console.log("Has obtendio un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada");
        break;
    default:
        console.log("Error");
        break;
}
