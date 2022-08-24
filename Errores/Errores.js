const miFuncion = val =>{
    if(typeof val === "number"){
        return 2*val
    }
    throw new Error("El valor debe ser de tipo numero")
}



try{
    console.log("Esta ejecutandose bien")
    const doble = miFuncion(numero)
    // Codigo que puede fallar
}catch(e){
    console.log(`Error! ${e}`)
    console.log()
    // En caso de fallar, quiero que ejecutes
}finally{
    console.log("Esto se va a ejecutar tant si se produce algun error, como si no exite ninguno")
    // Esto se ejecute siempre
}

// InternalError, SytntaxError, TypeError, RangeError y ReferenceError

// Global - objects / error