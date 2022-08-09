let result = 1;
let i = 1
let fact = 10
Factorial: while(true){
    result *= i;
    i++;
    if(i>10){
        console.log(`El factorial de ${fact}  =  ${result}`);
        break Factorial;
    } 
}