document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.querySelector(".formulario");
  const inputFoto = document.getElementById("foto");
  const preview = document.getElementById("preview_imagen");
  const btnEliminar = document.getElementById("btn_eliminar_imagen");

  // Ocultar botón al inicio
  btnEliminar.style.display = "none";

  // ==============================
  // PREVIEW IMAGEN
  // ==============================
  inputFoto.addEventListener("change", function () {
    const archivo = inputFoto.files[0];

    if (archivo) {
      if (!archivo.type.startsWith("image/")) {
        Swal.fire({
          title: "Archivo inválido",
          text: "Solo se permiten imágenes",
          icon: "error"
        });
        inputFoto.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(archivo);

      btnEliminar.style.display = "inline-block";
    }
  });

  // ==============================
  // ELIMINAR IMAGEN
  // ==============================
  btnEliminar.addEventListener("click", function () {
    inputFoto.value = "";
    preview.src = "../assets/icono_img.png";
    btnEliminar.style.display = "none";

    Swal.fire({
      title: "Imagen eliminada",
      icon: "info"
    });
  });

  // ==============================
  // SUBMIT
  // ==============================
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.querySelector('input[name="nombre_receta"]').value.trim();
    const ingredientes = document.querySelector('input[name="ingredientes"]').value.trim();
    const instrucciones = document.querySelector('textarea[name="instrucciones"]').value.trim();
    const hashtags = document.querySelector('#hashtags').value.trim();
    const imagen = inputFoto.files[0];
    const categoria = document.querySelector('input[name="categoria"]:checked');
    const dificultad = document.querySelector('input[name="dificultad"]:checked');
    const presupuesto = document.querySelector('input[name="presupuesto"]:checked');
    const tiempo = document.querySelector('input[name="tiempo"]:checked');

    if (!nombre || !ingredientes || !instrucciones) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor completa los campos obligatorios",
        icon: "warning"
      });
      return;
    }

    if (!categoria || !dificultad || !presupuesto || !tiempo) {
      Swal.fire({
        title: "Faltan opciones",
        text: "Selecciona categoría, dificultad, presupuesto y tiempo",
        icon: "warning"
      });
      return;
    }

    if (!imagen) {
      Swal.fire({
        title: "Falta la imagen",
        text: "Debes subir una imagen para la receta",
        icon: "warning"
      });
      return;
    }

    const receta = {
      nombre,
      ingredientes,
      instrucciones,
      hashtags,
      categoria: categoria.value,
      dificultad: dificultad.value,
      presupuesto: presupuesto.value,
      tiempo: tiempo.value,
      imagen: imagen.name
    };

    console.log("Receta creada:", receta);

    Swal.fire({
      title: "¡Receta publicada!",
      text: "Tu receta se guardó correctamente",
      icon: "success",
      confirmButtonText: "OK"
    }).then(() => {
      formulario.reset();

      inputFoto.value = "";
      preview.src = "../assets/icono_img.png";
      btnEliminar.style.display = "none";

      document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
      });
    });
  });

});