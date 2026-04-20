document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".form_busqueda");
  const inputBusqueda = document.getElementById("busqueda");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const valorBusqueda = inputBusqueda.value.trim();

    if (valorBusqueda === "") {
      Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Por favor escribe algún ingrediente",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Buscando receta...",
      text: `Estás buscando recetas con: ${valorBusqueda}`,
      confirmButtonText: "OK",
    });

  });
});