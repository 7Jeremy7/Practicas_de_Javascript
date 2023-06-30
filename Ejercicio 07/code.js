let nums = [10,8,9,7,0]
let target = 5;
mensaje = "[ "


for (let i = 0; i<nums.length; i++){
    if (nums[i]>target){
        mensaje+= nums[i]+ " ";
    }
}

mensaje += "]";

document.getElementById("text").textContent = mensaje;