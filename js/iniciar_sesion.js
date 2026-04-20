document.addEventListener("DOMContentLoaded", function () {
  const btn_login = document.getElementById("boton_login");
  const email_input = document.getElementById("email");
  const password_input = document.getElementById("password");

  btn_login.addEventListener("click", function (e) {
    e.preventDefault();

    const email = email_input.value.trim();
    const password = password_input.value.trim();

    if (email === "" || password === "") {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      text: "Los datos ingresados son correctos.",
    }).then(() => {
      window.location.href = "busqueda_recetas.html";
    });
  });
});