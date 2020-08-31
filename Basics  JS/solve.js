function solve(input){
    let name = input.shift();
    let age = input.shift();
    let grade = input.shift();
    console.log(`Hello ${name}! You are ${age} years old, and you are ${grade} for Mommy and Daddy!`);
}
solve(["Ani",30,6.00]);