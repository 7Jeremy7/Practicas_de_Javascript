let firstname = "Jorge";
let subject = "matemáticas";
let like = false;

let message = "Hola soy " + firstname + " estudiante de la materia de " + subject;



document.getElementById("text").textContent=message;

if (like){
    document.getElementById("text2").textContent="Esta materia me gusta";
}
else{
    document.getElementById("text2").textContent="Esta materia no me gusta";
}



