function sumIndexWhenZero(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        if(list[i]===0){
            sum+= i;
        }
    }
    return sum;
}

let nums = [1, 1, 0, 0]; 

let resultado = sumIndexWhenZero(nums);

alert(resultado);