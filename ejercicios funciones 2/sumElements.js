function sumElements(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        sum+= list[i];
    }
    return sum;
}

let nums = [1,2,3]; 

let resultado = sumElements(nums);

alert(resultado);