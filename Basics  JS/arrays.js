function sumFirstAndLast(input){
   let firstNumber = Number(input[0]);
   let lastNumber = input[(input.lenght-1)];
   
   console.log((lastNumber));
}
//sumFirstAndLast(['10','20','30','40']);

function dayOfweek(num){
    let days = [
        "Monday",
        "Tuesday",
        "Wendesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    if(num<1||num>7)
    {
        console.log("Invalid");
    }
    else{
        console.log(days[num-1]);
    }
}
dayOfweek(['3']);
