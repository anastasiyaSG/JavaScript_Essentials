let person = {name: 'Pesho', age:18, height:190};
person.iq = 190;
console.log(person);
let keysArray = Object.keys(person);
let valuesArray = Object.entries(person);
console.log(Object.fromEntries(valuesArray));
