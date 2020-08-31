function solve(input){
    let grade = Number(input.shift());
    let condition = grade>= 5.50;
    if(condition){
        console.log("Excellent");
    }   
    else{
        console.log("Not so good");
    } 
}
//solve(["5"]);
function odd_even(input){
    let number = Number(input.shift());
    let condition = number%2 ==0;
    if  (condition){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
//odd_even(["1"]);
function numbers(input){
    let number = Number(input.shift());
    if(number===1){
        console.log("one");
}
else if(number ===2){
    console.log("two");
}
else if(number ===3){
    console.log("three");
}
else if(number ===4){
    console.log("four");
}
else if(number ===5){
    console.log("five");
}
else if(number >5){
    console.log("number too big");
}
}
numbers(["4"]);
