let firstName = "Marco";
let age = 24;
let isMarried = false;


let etiqueta = document.getElementById("miEtiqueta");


if (isMarried){
    etiqueta.innerHTML = ("Hola mi nombre es: " + firstName + " y tengo " + age + " años" + ", soy casado.");
}
else{
    etiqueta.innerHTML = ("Hola mi nombre es: " + firstName + " y tengo " + age + " años" + ", soy soltero.");
}


