function sumMultThree(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        if(list[i]%3===0){
            sum+= list[i];
        }
    }
    return sum;
}

let nums = [12,3,5,7]; 

let resultado = sumMultThree(nums);

alert(resultado);