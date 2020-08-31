function solve(){
    const names = ['Pesho','Gosho','Kiro'];
    names.push('Mara');
   // console.log(names);
   for(let name of names){
       console.log(name);
   }
   for(let index in names){
       console.log(`${index} - ${names[index]}`);
   }
}
solve();
function partArray(num,numbers){
    let numberslice = [];
    for(let i = 0; i<num; i++){
        numberslice[num-1-i]= numbers[i];
    }
    console.log(numberslice.join(' '));
    
}
//partArray('3',['10','20','30','50']);