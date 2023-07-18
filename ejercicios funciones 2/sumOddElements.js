function sumOddElements(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        if(list[i]%2===1){
            sum+= list[i];
        }
    }
    return sum;
}

let nums = [3,5,8,4]; 

let resultado = sumOddElements(nums);

alert(resultado);