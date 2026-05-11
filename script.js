// BOTONES DE ESTILO
function modoNormal() {
    document.body.classList.remove("alto-contraste");
}

function modoContraste() {
    document.body.classList.add("alto-contraste");
}

// VALIDACIÓN AL ENVIAR
document.getElementById("formulario").addEventListener("submit", function(e) {

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let fecha = document.getElementById("fecha").value;
    let pais = document.getElementById("pais").value;

    // Validación manual extra
    if (nombre === "" || apellido === "" || email === "" || fecha === "" || pais === "") {
        alert("Por favor complete todos los campos");
        e.preventDefault(); // evita enviar
        return;
    }

    // Validación de email simple
    if (!email.includes("@")) {
        alert("Ingrese un email válido");
        e.preventDefault();
        return;
    }

    alert("Formulario enviado correctamente ✅");
});
// CAMBIO DE ESTILO
function modoNormal() {
    document.body.classList.remove("dark");
}

function modoOscuro() {
    document.body.classList.add("dark");
}

// VALIDACIÓN
document.getElementById("formulario").addEventListener("submit", function(e){

    let inputs = document.querySelectorAll("input, select");

    for(let input of inputs){
        if(!input.value){
            alert("Complete todos los campos");
            e.preventDefault();
            return;
        }
    }

    alert("Formulario enviado correctamente ✅");
});