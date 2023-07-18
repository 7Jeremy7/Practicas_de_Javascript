function sumOverTen(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        if(list[i]>10){
            sum+= list[i];
        }
    }
    return sum;
}

/* let nums = [10,50,8,4]; 

let resultado = sumOverTen(nums);

alert(resultado); */
let user = {
    
  };
let p1 = new Punto (1, 2);
let p2 = new Punto (2, 3);

console.log(p1.suma(p2).toString());