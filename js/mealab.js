document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("boton_registro");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const terminos = document.getElementById("terminos");

  boton.addEventListener("click", function (e) {
    e.preventDefault();

    const nombreVal = nombre.value.trim();
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    const confirmPassVal = confirmPassword.value.trim();

    const tipoUsuario = document.querySelector('input[name="tipoUsuario"]:checked');
        //--> Campos vacíos
       if (!nombreVal || !emailVal || !passVal || !confirmPassVal) {
      Swal.fire("Campos incompletos", "Completa todos los campos", "warning");
      return;
    }

     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(emailVal)) {
      Swal.fire("Email inválido", "Ingresa un correo válido", "error");
      return;
    }

    if (passVal !== confirmPassVal) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }

    if (!tipoUsuario) {
      Swal.fire("Selecciona una opción", "Debes elegir Usuario o Chef", "info");
      return;
    }

     if (!terminos.checked) {
      Swal.fire("Términos", "Debes aceptar los términos y condiciones", "info");
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: `Registrado como ${tipoUsuario.value}`,
    }).then(() => {
      window.location.href = "iniciar_sesion.html";
    });
  });
});





    