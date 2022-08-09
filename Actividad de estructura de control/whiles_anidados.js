// Break y continue
// Labels --- alt 96 ``

let unidades = 0;
let decenas = 0;


bucleDecena: while(true){
    bucleUnidades: while(true){
        console.log(`El numero actual es:${decenas}${unidades}`)
        unidades++;
        if(unidades === 10){
            unidades = 0 // Se reinicia las unidades
            break bucleUnidades;
        }
        if (decenas === 3){
            break bucleDecena;
        }
    }
    decenas++;
}

console.log("Ya hemos terminado")



