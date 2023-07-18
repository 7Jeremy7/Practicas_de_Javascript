function sumNoMultSeven(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        if(list[i]%7!==0){
            sum+= list[i];
        }
    }
    return sum;
}

let nums = [12,14,5,7]; 

let resultado = sumNoMultSeven(nums);

alert(resultado);