let nums = [10,8,9,7,0];
let i = 0;
let t = nums.length;
let mensaje = "[ ";

while (i < t){
    mensaje += nums[i] + " ";
    i++;
}

mensaje += "]";

document.getElementById("text").textContent= mensaje;