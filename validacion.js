// validacion.js
function validateForm() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre == "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    if (email == "") {
        alert("Por favor, ingrese su correo electrónico.");
        return false;
    }

    if (asunto == "") {
        alert("Por favor, ingrese el asunto.");
        return false;
    }

    if (mensaje == "") {
        alert("Por favor, ingrese su mensaje.");
        return false;
    }

    // Validación de formato de email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}
