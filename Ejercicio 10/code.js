let nums = [10, 8, 9, 7, 3, 12];
let target = 3;
let message = "[ ";

for (let i = 0; i < nums.length; i++){
    if (nums[i]%target===0 ){
        message += nums[i] + " ";
    }
}

message += "]";

document.getElementById("text").textContent = message;