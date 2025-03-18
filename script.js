// Variables globales
let peliculasVisibles = 0;
let peliculas = [
    {
        id: 1,
        titulo: "Interestelar",
        genero: "ciencia-ficcion",
        imagen: "https://image.tmdb.org/t/p/w500/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/UoSSbmD9vqc",
        descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad."
    },
    {
        id: 2,
        titulo: "El Padrino",
        genero: "drama",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/padrino.jpg-YBcp8eIFrGJqC7aLsHRK3lTha23sDX.jpeg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/sY1S34973zA",
        descripcion: "La historia de la familia Corleone, una de las más poderosas mafias de Nueva York en los años 40."
    },
    {
        id: 3,
        titulo: "Pulp Fiction",
        genero: "crimen",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pulp.jpg-Xk0zqykkKArCSdjuqzS9k5O2X8pH4K.jpeg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        descripcion: "Las vidas de dos asesinos a sueldo, un boxeador, la esposa de un gángster y dos bandidos se entrelazan en cuatro historias de violencia y redención."
    },
    {
        id: 4,
        titulo: "El Caballero de la Noche",
        genero: "accion",
        imagen: "https://image.tmdb.org/t/p/w500/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
        descripcion: "Batman se enfrenta a su mayor desafío cuando el Joker aterroriza Gotham City con su caos psicológico."
    },
    {
        id: 5,
        titulo: "Parásitos",
        genero: "drama",
        imagen: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/isOGD_7hNIY",
        descripcion: "La familia Kim, todos desempleados, se interesa por el estilo de vida de la adinerada familia Park, pero un incidente inesperado pone en riesgo su nuevo vínculo."
    },
    {
        id: 6,
        titulo: "Coco",
        genero: "animacion",
        imagen: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/xlnPHQ3TLX8",
        descripcion: "Miguel sueña con ser músico, pero su familia lo prohíbe. Desesperado por demostrar su talento, se encuentra en la Tierra de los Muertos."
    },
    {
        id: 7,
        titulo: "El Resplandor",
        genero: "terror",
        imagen: "https://image.tmdb.org/t/p/w500/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/S014oGZiSdI",
        descripcion: "Un escritor se convierte en cuidador de un hotel aislado durante el invierno, donde la influencia sobrenatural lo lleva a la locura."
    },
    {
        id: 8,
        titulo: "La La Land",
        genero: "comedia",
        imagen: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/0pdqf4P9MB8",
        descripcion: "Un pianista de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños en Los Ángeles, una ciudad conocida por destruir esperanzas y romper corazones."
    },
    // Nuevas películas añadidas
    {
        id: 9,
        titulo: "Forrest Gump",
        genero: "drama",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fores.jpg-ANGOBdJpbXNbgyqcQEzkioc5RPsGfI.jpeg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
        descripcion: "La historia de Forrest Gump, un hombre con un coeficiente intelectual bajo que ha participado en momentos cruciales de la historia de Estados Unidos."
    },
    {
        id: 10,
        titulo: "Titanic",
        genero: "romance",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Titanic.jpg-YWeIBIaiVcRzITgMCUQxRM95lRbmu0.jpeg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ",
        descripcion: "Una historia de amor entre un joven artista y una joven de clase alta a bordo del Titanic, el transatlántico que se hundió en su viaje inaugural."
    },
    {
        id: 11,
        titulo: "Jurassic World: El Reino Caído",
        genero: "ciencia-ficcion",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jurassic%20park.jpg-AkD9hVy80xbgYVGHByIK0geL1Jvokj.jpeg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/vn9mMeWcgoM",
        descripcion: "Tres años después del cierre de Jurassic World, Owen y Claire regresan a la isla para salvar a los dinosaurios de una erupción volcánica."
    },
    {
        id: 12,
        titulo: "El Señor de los Anillos: Las Dos Torres",
        genero: "fantasia",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/el%20se%C3%B1or%20de%20los%20anillos.jpg-D3Gy7wR9PSGGfdWjufZ6YfmHIOyk86.jpeg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/LbfMDwc4azU",
        descripcion: "Frodo y Sam continúan su viaje hacia Mordor para destruir el Anillo Único, mientras Aragorn, Legolas y Gimli persiguen a los orcos que secuestraron a sus amigos."
    },
    {
        id: 13,
        titulo: "Matrix",
        genero: "ciencia-ficcion",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matrix.jpg-bBe6FtsiC1ZtPM3XzEEY7vYtdWuQHp.jpeg",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
        descripcion: "Un programador informático descubre que el mundo en el que vive es una simulación creada por máquinas que han esclavizado a la humanidad."
    },
    {
        id: 14,
        titulo: "Star Wars",
        genero: "ciencia-ficcion",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/starwars-nVGOPI00ymIA1ubbUxlkLUEvpQgx5Z.webp",
        videoTipo: "youtube",
        videoUrl: "https://www.youtube.com/embed/vZ734NWnAHA",
        descripcion: "En una galaxia muy, muy lejana, la lucha entre el bien y el mal se desarrolla entre los Jedi y los Sith, con el destino de la galaxia en juego."
    }
];

// Función para mostrar el modal de video
function mostrarVideo(pelicula) {
    const modal = document.getElementById("videoModal");
    const youtubePlayer = document.getElementById("youtubePlayer");
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");
    const videoTitle = document.getElementById("videoTitle");

    // Establecer el título del video
    if (videoTitle) {
        videoTitle.textContent = pelicula.titulo;
    }

    // Configurar el reproductor según el tipo de video
    if (pelicula.videoTipo === "youtube") {
        // Mostrar el reproductor de YouTube y ocultar el reproductor de video local
        youtubePlayer.style.display = "block";
        videoPlayer.style.display = "none";
        
        // Establecer la fuente del video de YouTube
        youtubePlayer.src = pelicula.videoUrl;
    } else {
        // Mostrar el reproductor de video local y ocultar el reproductor de YouTube
        youtubePlayer.style.display = "none";
        videoPlayer.style.display = "block";
        
        // Establecer la fuente del video local
        videoSource.src = pelicula.videoUrl;
        
        // Recargar el video para que se aplique la nueva fuente
        videoPlayer.load();
        
        // Reproducir el video
        videoPlayer.play().catch((error) => {
            console.log("Error al reproducir automáticamente: ", error);
        });
    }

    // Mostrar el modal con animación
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);

    // Deshabilitar scroll en el body
    document.body.style.overflow = "hidden";
}

// Función para cerrar el modal de video
function cerrarVideo() {
    const modal = document.getElementById("videoModal");
    const youtubePlayer = document.getElementById("youtubePlayer");
    const videoPlayer = document.getElementById("videoPlayer");

    // Detener el video de YouTube
    youtubePlayer.src = "";
    
    // Pausar el video local
    videoPlayer.pause();

    // Ocultar el modal con animación
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);

    // Habilitar scroll en el body
    document.body.style.overflow = "auto";
}

// Cerrar el modal al hacer clic fuera del video
window.onclick = (event) => {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        cerrarVideo();
    }
};

// Cerrar el modal al presionar la tecla Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        cerrarVideo();
    }
});

// Función para cargar imagen alternativa si la original falla
function cargarImagenAlternativa(img, titulo) {
    // Primero intentamos cargar desde internet
    img.src = "https://image.tmdb.org/t/p/w500/buscar?q=" + encodeURIComponent(titulo);

    // Si también falla, usamos el placeholder local
    img.onerror = () => {
        img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect width='300' height='450' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' text-anchor='middle' fill='%23999999'%3EImagen no disponible%3C/text%3E%3C/svg%3E";
        img.onerror = null; // Evitar bucle infinito
    };
}

// Función para filtrar películas por género
function filtrarPeliculas() {
    const genero = document.getElementById("genero").value;
    const peliculasContainer = document.getElementById("peliculas-container");
    const noResultados = document.getElementById("no-resultados");

    // Limpiar el contenedor de películas
    peliculasContainer.innerHTML = "";

    // Filtrar películas por género
    const peliculasFiltradas = genero === "todos" 
        ? peliculas 
        : peliculas.filter(pelicula => pelicula.genero === genero);

    // Mostrar mensaje si no hay resultados
    if (peliculasFiltradas.length === 0) {
        noResultados.style.display = "block";
    } else {
        noResultados.style.display = "none";
        
        // Generar tarjetas de películas filtradas
        peliculasFiltradas.forEach(pelicula => {
            peliculasContainer.appendChild(crearTarjetaPelicula(pelicula));
        });
    }

    peliculasVisibles = peliculasFiltradas.length;
}

// Función para buscar películas por título
function buscarPeliculas() {
    const busqueda = document.getElementById("busqueda").value.toLowerCase();
    const peliculasContainer = document.getElementById("peliculas-container");
    const noResultados = document.getElementById("no-resultados");

    // Limpiar el contenedor de películas
    peliculasContainer.innerHTML = "";

    // Filtrar películas por título
    const peliculasFiltradas = peliculas.filter(pelicula => 
        pelicula.titulo.toLowerCase().includes(busqueda)
    );

    // Mostrar mensaje si no hay resultados
    if (peliculasFiltradas.length === 0) {
        noResultados.style.display = "block";
    } else {
        noResultados.style.display = "none";
        
        // Generar tarjetas de películas filtradas
        peliculasFiltradas.forEach(pelicula => {
            peliculasContainer.appendChild(crearTarjetaPelicula(pelicula));
        });
    }

    peliculasVisibles = peliculasFiltradas.length;
}

// Función para crear una tarjeta de película
function crearTarjetaPelicula(pelicula) {
    // Crear el elemento de la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.className = "pelicula";
    tarjeta.setAttribute("data-genero", pelicula.genero);
    
    // Crear el contenido HTML de la tarjeta
    tarjeta.innerHTML = `
        <div class="pelicula-imagen">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}" onerror="cargarImagenAlternativa(this, '${pelicula.titulo}')">
            <div class="pelicula-overlay">
                <button class="btn-play" aria-label="Reproducir ${pelicula.titulo}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </button>
            </div>
        </div>
        <div class="pelicula-info">
            <h3 class="pelicula-titulo">${pelicula.titulo}</h3>
            <p class="pelicula-genero">Género: ${pelicula.genero}</p>
            <p class="pelicula-descripcion">${pelicula.descripcion}</p>
        </div>
    `;
    
    // Agregar evento de clic para reproducir el video
    tarjeta.addEventListener("click", () => mostrarVideo(pelicula));
    
    return tarjeta;
}

// Función para alternar el menú móvil
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Inicializar la página cuando se carga
document.addEventListener("DOMContentLoaded", () => {
    const peliculasContainer = document.getElementById("peliculas-container");
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Generar tarjetas de películas
    peliculas.forEach(pelicula => {
        peliculasContainer.appendChild(crearTarjetaPelicula(pelicula));
    });
    
    // Inicializar contador de películas visibles
    peliculasVisibles = peliculas.length;
    
    // Configurar evento para el botón de menú móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
});

// Registrar Service Worker para funcionalidad offline
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").then(
            (registration) => {
                console.log("Service Worker registrado con éxito:", registration.scope);
            },
            (err) => {
                console.log("Error al registrar Service Worker:", err);
            }
        );
    });
}