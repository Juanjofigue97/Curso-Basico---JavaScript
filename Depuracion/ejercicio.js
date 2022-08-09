function Fibonacci2(num){
    var fibo = [];
    if(num<0){
        console.log(`El numero: ${num} no es valido`)
    }else if(num == 1){
        fibo = [1]
        console.log(`El numero: ${fibo} no es valido`)
    }else if(num == 2){
        fibo = [1,1]
        console.log(`El numero: ${fibo}`)
    }else if (num>=3){
        fibo = [1,1]
        let a = 1
        let b = 1
        let aux = 0
        for (let i = 0; i < num-2;i++){
            aux = a + b
            // console.log(aux)
            fibo = [...fibo,aux ]
            a = b;
            b = aux
        }
    }
    return fibo
    //console.log(fibo)
}
// Solucion
function Fibonacci(num) {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    let list = [1, 1]
    for (let i = 2; i < num; i++) {
        list.push(list[i - 1] + list[i - 2])
    }
    return list
}

console.log(Fibonacci(6))
//Fibonacci2(-3)
console.log(Fibonacci2(6))