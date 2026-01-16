const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const boton = document.getElementById("enviar");

function validarFormulario() {
    const valido =
        validarNombre() &
        validarCorreo() &
        validarPassword() &
        validarConfirmar() &
        validarEdad();

    boton.disabled = !valido;
}

function validarNombre() {
    const regex = /^[A-Za-z]{3,}$/;
    return validarCampo(nombre, regex, "iconoNombre", "msgNombre");
}

function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validarCampo(correo, regex, "iconoCorreo", "msgCorreo");
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[!@#$%]).{8,}$/;
    return validarCampo(password, regex, "iconoPassword", "msgPassword");
}

function validarConfirmar() {
    const valido = confirmar.value === password.value && confirmar.value !== "";
    actualizarUI(confirmar, valido, "iconoConfirmar", "msgConfirmar");
    return valido;
}

function validarEdad() {
    const valido = edad.value >= 18;
    actualizarUI(edad, valido, "iconoEdad", "msgEdad");
    return valido;
}

function validarCampo(input, regex, iconoId, msgId) {
    const valido = regex.test(input.value);
    actualizarUI(input, valido, iconoId, msgId);
    return valido;
}

function actualizarUI(input, valido, iconoId, msgId) {
    const icono = document.getElementById(iconoId);
    const msg = document.getElementById(msgId);

    if (valido) {
        input.className = "valido";
        icono.textContent = "✔";
        icono.className = "icono ok";
        msg.classList.remove("error");
    } else {
        input.className = "invalido";
        icono.textContent = "✖";
        icono.className = "icono error";
        msg.classList.add("error");
    }
}

[nombre, correo, password, confirmar, edad].forEach(input => {
    input.addEventListener("input", validarFormulario);
});

document.getElementById("formulario").addEventListener("submit", e => {
    e.preventDefault();
    alert("Formulario enviado correctamente ✅");
});
