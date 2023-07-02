let nums = [30, 60, 70];
let target = 70;
let sum = 0;
message = "Recuperación";

for (let i = 0; i < nums.length; i++){
    sum += nums[i];
}

let aver = (sum/nums.length); 


if (aver >= target){
    message = aver + " Aprobado";
}

document.getElementById("text").textContent = message;