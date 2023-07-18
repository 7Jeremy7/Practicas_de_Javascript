function sumEleWhenEqIndex(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        if(list[i]===i){
            sum+= list[i];
        }
    }
    return sum;
}

let nums = [2,1,4,3]; 

let resultado = sumEleWhenEqIndex(nums);

alert(resultado);