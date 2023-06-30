let nums = [-10,8,-9,7,-3,-12];
let target = 0;
let message = "[ ";

for (let i = 0; i < nums.length; i++){
    if (nums[i]<target){
        message += nums[i] + " ";
    }
}

message += "]";

document.getElementById("text").textContent = message;