function whileConstruction(input){
let number = Number(input.shift());
while (number>0) {
    console.log("Biger than 0");
    number--;
}
}
//whileConstruction(["10"]);
function forCharCodeAt(){
    let name = "Pesho"
    for (let i = 0; i < name.length; i++) {
        let ascii= name.charCodeAt(i);
        console.log(ascii);
    }
}
//forCharCodeAt();
function forFromCharCode(){
    let name = 'Pesho';
    console.log(name.length);
    let output = '';
    for (let i = 0; i < name.length; i++){
     let ascii = name.charCodeAt(i);
     ascii+=1;
     let newSymbol = String.fromCharCode(ascii);
     output +=newSymbol;
    }
    console.log(output);
}
//forFromCharCode();
function counterOfvowel(input){
    let text = input[0];
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
       let symbol = text[i];
       switch (symbol) {
           case 'a':
               sum+=1;
               break;
            case 'e':
                sum+=1;
                break;
                case 'i':
                    sum+=1;
                    break;
                    case 'o':
                        sum+=1;
                        break;
                        case 'u':
                            sum+=1;
                          break;
                }
            }
            console.log(sum);
    }
   // counterOfvowel(["beer"]);
   function solve (input){
       let n = Number(input[0]);
       let sum = 0;
       for (let i = 0; i < input.length; i++) {
           sum+=Number(input[i]);
           
       }
       console.log(sum);
   }
  // solve(['5','10','12','13']);
  function evenPower (input){
      let n = Number(input.shift());
      for (let i = 0; i <=n; i+=2) {
          //console.log(Math.pow(2,i));
          let number = 2**i;
          // only at JS and Phyton can be use 2 on power ** i;
                  console.log(number);
      }
  }
  evenPower(["10"]);
   
