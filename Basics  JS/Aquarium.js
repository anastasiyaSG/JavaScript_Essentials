function aquarium(input){
    let lenght = Number(input.shift());
    let width = Number(input.shift());
    let heigth = Number(input.shift());
    let percentage = Number(input.shift());

    let volume = lenght*width*heigth;
    let liters = volume*0.001;
    let result = liters - liters*percentage/100;

    console.log(result.toFixed(3));
}
aquarium(['50','75','47','17'])