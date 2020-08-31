function solve(input){
    console.log(input);
    return input[0];
}
let functinResult = solve('Pesho');

console.log(functinResult);

function mathPower(num,power){
    let result = 1;
    for (let i = 0; i < power; i++) {
        result*=num;
}
return result;
}
let result = mathPower(2,8);
console.log(result);

function arrow(num,operation){
let result = operation(num);
console.log(result);
}
arrow(5, a => a * a);
arrow(5,x=>++x);

function simpleCalculator(firstOperand, secondOperand, operationC){
    const multiply =(a,b)=>a*b;
    const divide = (a,b)=> a/b;
    const add= (a,b)=> a+b;
    const substract = (a,b)=> a-b;

    switch(operationC){
        case 'multiply':
            return multiply(firstOperand,secondOperand);
        case 'divide':
            return divide(firstOperand,secondOperand);
        case 'add':
            return add(firstOperand,secondOperand);
        case 'substract':
            return multiply(firstOperand,secondOperand)
    }
}
let resultCalculator= simpleCalculator(5,
    5,
    'multiply');
console.log(resultCalculator);




