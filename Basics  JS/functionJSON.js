function solve(inputJSON){
    let info = JSON.parse(inputJSON);
    for(const key in info){
        console.log(`${key}: ${info[key]}`)
    }
}