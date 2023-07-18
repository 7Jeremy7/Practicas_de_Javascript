function sumEvenIndex(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        if(i%2===0){
            sum+= list[i];
        }
    }
    return sum;
}

let nums = [10,50,8,4]; 

let resultado = sumEvenIndex(nums);

alert(resultado);