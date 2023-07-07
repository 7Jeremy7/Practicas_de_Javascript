let nums = [100, 90, 70];
let target = 70;
let sum = 0;
let message;

for (let i = 0; i < nums.length; i++){
    sum += nums[i];
}

let aver = (sum/nums.length); 


if (aver >= target){
    message = aver.toFixed(2) + " Aprobado";
}

else {
    message = aver.toFixed(2) + " Recuperación";
}

document.getElementById("text").textContent = message;