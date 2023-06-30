let nums = [23, 45, 12, 5, 23, 89];
let target = 18;
let message = "[ ";

for (let i = 0; i < nums.length; i++){
    if (nums[i]>= target ){
        message += nums[i] + " ";
    }
}

message += "]";

document.getElementById("text").textContent = message;