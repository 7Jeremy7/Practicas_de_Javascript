let myName = prompt("Escribe tu nombre");
let cont = 0;
let target = prompt("Que letra quieres encontrar?");

for (let i = 0; i< myName.length; i++){
    if (myName[i]==target) {
        cont++;
    }
}

document.getElementById("text").textContent = "Tu nombre es: " + myName;

document.getElementById("text2").textContent = "Tu nombre tiene " + cont + " -> " +  target;