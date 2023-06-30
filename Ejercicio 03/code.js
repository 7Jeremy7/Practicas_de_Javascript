let firstName = prompt("Como te llamas?");
let age = prompt("Cuantos años tienes?");
const DEFAULT = 18;


let etiqueta = document.getElementById("miEtiqueta");


if (age>=DEFAULT){
    etiqueta.innerHTML = ("Hola mi nombre es: " + firstName + " y tengo " + age + " años, por lo tanto" + ", soy mayor de edad.");
}
else{
    etiqueta.innerHTML = ("Hola mi nombre es: " + firstName + " y tengo " + age + " años, por lo tanto" + ", soy menor de edad.");
}

