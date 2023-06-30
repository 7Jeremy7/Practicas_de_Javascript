let nums = [23, 45, 12, 5, 23, 89];
let target = 18;
let counter = 0;

for (let i = 0; i < nums.length; i++){
    if (nums[i]>= target ){
        counter += 1;
    }
}


document.getElementById("text").textContent = counter;