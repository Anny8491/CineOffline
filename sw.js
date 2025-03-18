// Variables globales
let peliculasVisibles = 0

// Función para mostrar el modal de video de YouTube
function mostrarVideo(youtubeUrl, titulo) {
  const modal = document.getElementById("videoModal")
  const youtubePlayer = document.getElementById("youtubePlayer")
  const videoTitle = document.getElementById("videoTitle")

  // Establecer la fuente del video de YouTube
  youtubePlayer.src = youtubeUrl

  // Establecer el título del video
  if (videoTitle) {
    videoTitle.textContent = titulo
  }

  // Mostrar el modal con animación
  modal.style.display = "flex"
  setTimeout(() => {
    modal.style.opacity = "1"
  }, 10)

  // Añadir título al video (opcional)
  console.log("Reproduciendo: " + titulo)

  // Deshabilitar scroll en el body
  document.body.style.overflow = "hidden"
}

// Función para cerrar el modal de video
function cerrarVideo() {
  const modal = document.getElementById("videoModal")
  const youtubePlayer = document.getElementById("youtubePlayer")

  // Detener el video de YouTube
  youtubePlayer.src = ""

  // Ocultar el modal con animación
  modal.style.opacity = "0"
  setTimeout(() => {
    modal.style.display = "none"
  }, 300)

  // Habilitar scroll en el body
  document.body.style.overflow = "auto"
}

// Cerrar el modal al hacer clic fuera del video
window.onclick = (event) => {
  const modal = document.getElementById("videoModal")
  if (event.target == modal) {
    cerrarVideo()
  }
}

// Cerrar el modal al presionar la tecla Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    cerrarVideo()
  }
})

// Función para cargar imagen alternativa si la original falla
function cargarImagenAlternativa(img, titulo) {
  // Primero intentamos cargar desde internet
  img.src = "https://image.tmdb.org/t/p/w500/buscar?q=" + encodeURIComponent(titulo)

  // Si también falla, usamos el placeholder local
  img.onerror = () => {
    img.src = "images/placeholder.jpg"
    img.onerror = null // Evitar bucle infinito
  }
}

// Función para filtrar películas por género
function filtrarPeliculas() {
  const genero = document.getElementById("genero").value
  const peliculas = document.querySelectorAll(".pelicula")
  const noResultados = document.getElementById("no-resultados")

  let contadorVisibles = 0

  peliculas.forEach((pelicula) => {
    if (genero === "todos" || pelicula.getAttribute("data-genero") === genero) {
      pelicula.style.display = "block"
      contadorVisibles++
    } else {
      pelicula.style.display = "none"
    }
  })

  // Mostrar mensaje si no hay resultados
  if (noResultados) {
    if (contadorVisibles === 0) {
      noResultados.style.display = "block"
    } else {
      noResultados.style.display = "none"
    }
  }

  peliculasVisibles = contadorVisibles
}

// Función para buscar películas por título
function buscarPeliculas() {
  const busqueda = document.getElementById("busqueda").value.toLowerCase()
  const peliculas = document.querySelectorAll(".pelicula")
  const noResultados = document.getElementById("no-resultados")

  let contadorVisibles = 0

  peliculas.forEach((pelicula) => {
    const titulo = pelicula.querySelector(".pelicula-titulo").textContent.toLowerCase()

    if (titulo.includes(busqueda)) {
      pelicula.style.display = "block"
      contadorVisibles++
    } else {
      pelicula.style.display = "none"
    }
  })

  // Mostrar mensaje si no hay resultados
  if (noResultados) {
    if (contadorVisibles === 0) {
      noResultados.style.display = "block"
    } else {
      noResultados.style.display = "none"
    }
  }

  peliculasVisibles = contadorVisibles
}

// Función para manejar el envío del formulario de contacto
function enviarFormulario(event) {
  event.preventDefault()

  const nombre = document.getElementById("nombre").value
  const email = document.getElementById("email").value
  const asunto = document.getElementById("asunto").value
  const mensaje = document.getElementById("mensaje").value
  const formMensaje = document.getElementById("form-mensaje")

  // En un entorno real, aquí enviarías los datos a un servidor
  console.log("Formulario enviado:")
  console.log("Nombre: " + nombre)
  console.log("Email: " + email)
  console.log("Asunto: " + asunto)
  console.log("Mensaje: " + mensaje)

  // Mostrar mensaje de éxito
  if (formMensaje) {
    formMensaje.textContent = "¡Gracias por tu mensaje! Te responderemos lo antes posible."
    formMensaje.classList.add("success")
    formMensaje.style.display = "block"

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      formMensaje.style.display = "none"
    }, 5000)
  }

  // Limpiar el formulario
  document.getElementById("formulario-contacto").reset()
}

// Función para el acordeón en la página de contacto
function toggleAccordion(element) {
  // Verificar si el elemento ya está activo
  const isActive = element.classList.contains("active")

  // Cerrar todos los acordeones abiertos
  const allHeaders = document.querySelectorAll(".accordion-header")
  const allContents = document.querySelectorAll(".accordion-content")

  allHeaders.forEach((header) => {
    header.classList.remove("active")
  })

  allContents.forEach((content) => {
    content.classList.remove("active")
  })

  // Si el elemento no estaba activo, abrirlo
  if (!isActive) {
    element.classList.add("active")
    const content = element.nextElementSibling
    content.classList.add("active")
  }
}

// Inicializar la página cuando se carga
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar contadores
  const peliculasContainer = document.getElementById("peliculas-container")
  if (peliculasContainer) {
    peliculasVisibles = peliculasContainer.querySelectorAll(".pelicula").length
  }

  // Inicializar acordeones
  const accordionHeaders = document.querySelectorAll(".accordion-header")
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      toggleAccordion(this)
    })
  })
  
  // Configurar eventos para las películas con enlaces de YouTube
  const peliculas = document.querySelectorAll(".pelicula")
  peliculas.forEach((pelicula) => {
    pelicula.addEventListener("click", function() {
      const youtubeUrl = this.getAttribute("data-youtube-url")
      const titulo = this.querySelector(".pelicula-titulo").textContent
      
      if (youtubeUrl) {
        mostrarVideo(youtubeUrl, titulo)
      }
    })
  })
})

// Registrar Service Worker para funcionalidad offline
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(
      (registration) => {
        console.log("Service Worker registrado con éxito:", registration.scope)
      },
      (err) => {
        console.log("Error al registrar Service Worker:", err)
      },
    )
  })
}