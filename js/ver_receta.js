document.addEventListener("DOMContentLoaded", function () {
  const estrella = document.getElementById("icono_favorito");

  let esFavorito = false;

  estrella.addEventListener("click", function () {
    if (!esFavorito) {
      // Cambiar a estrella llena
      estrella.src = "../assets/icono_estrella_full.png";
      esFavorito = true;

      Swal.fire({
        icon: "success",
        title: "Agregado a favoritos",
        text: "La receta se guardó correctamente",
        timer: 1500,
        showConfirmButton: false
      });

    } else {
      // Volver a estrella vacía
      estrella.src = "../assets/icono_estrella_transparente.png";
      esFavorito = false;

      Swal.fire({
        icon: "info",
        title: "Eliminado de favoritos",
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
});