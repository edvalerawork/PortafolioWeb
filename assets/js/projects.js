/* Elementos */

const projectModal = document.getElementById("projectModal");
const closeProjectModal = document.getElementById("closeProjectModal");
const prevProjectTop = document.getElementById("prevProjectTop");
const nextProjectTop = document.getElementById("nextProjectTop");

const modalProjectImage = document.getElementById("modalProjectImage");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalProjectDescription = document.getElementById(
  "modalProjectDescription",
);
const modalProjectTech = document.getElementById("modalProjectTech");
const modalProjectGallery = document.getElementById("modalProjectGallery");
const modalProjectDemo = document.getElementById("modalProjectDemo");
const modalProjectGithub = document.getElementById("modalProjectGithub");

/* Estado */

let currentProject = 0;

/* Modal dinámico */

const projectData = [
  {
    title: "Reportes Seguridad Ciudadana",
    image: "assets/images/reportes-seguridad-ciudadana-login.webp",
    description:
      "Plataforma web orientada a gestión de incidencias ciudadanas, asignación automática, seguimiento por estados y control administrativo por roles.",
    tech: [
      "devicon-java-plain colored",
      "devicon-spring-plain colored",
      "devicon-mysql-plain",
      "devicon-thymeleaf-plain",
      "devicon-maven-plain colored",
    ],
    gallery: [
      "assets/images/reportes-seguridad-ciudadana-registro.webp",
      "assets/images/reportes-seguridad-ciudadana-dashboard.webp",
      "assets/images/reportes-seguridad-ciudadana-reporte.webp",
    ],
    demo: "#",
    github: "https://github.com/edvalerawork/reporte-seguridad-ciudadana-mvp",
  },

  {
    title: "TextiHuella Pet",
    image: "assets/images/textihuella-inicio.webp",
    description:
      "Página web para emprendimiento de productos personalizados para mascotas, enfocada en marca, catálogo y pedidos vía WhatsApp.",
    tech: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
    gallery: [
      "assets/images/textihuella-inicio.webp",
      "assets/images/textihuella-nosotros.webp",
      "assets/images/textihuella-servicios.webp",
    ],
    demo: "https://edvalerawork.github.io/textihuellapet-web/",
    github: "https://github.com/edvalerawork/textihuellapet-web",
  },

  {
    title: "LUMI Kids",
    image: "assets/images/web-lumi-inicio.webp",
    description:
      "Sitio web interactivo enfocado en educación financiera infantil, diseñado para transmitir aprendizaje mediante una experiencia visual atractiva, moderna y dinámica.",
    tech: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
    gallery: [
      "assets/images/web-lumi-inicio.webp",
      "assets/images/web-lumi-juegos.webp",
      "assets/images/web-lumi-videos.webp",
    ],
    demo: "https://edvalerawork.github.io/lumi-kids-website/",
    github: "https://github.com/edvalerawork/lumi-kids-website",
  },

  {
    title: "IESTP Lurín",
    image: "assets/images/web-lurin-inicio.webp",
    description:
      "Plataforma institucional responsiva enfocada en presencia educativa digital, estructura moderna y navegación clara para mejorar comunicación visual institucional.",
    tech: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
    gallery: [
      "assets/images/web-lurin-inicio.webp",
      "assets/images/web-lurin-nosotros.webp",
      "assets/images/web-lurin-admision.webp",
    ],
    demo: "https://edvalerawork.github.io/pagina-weblurin/",
    github: "https://github.com/edvalerawork/pagina-weblurin",
  },

  {
    title: "Encriptador de Texto",
    image: "assets/images/encriptador_texto.webp",
    description:
      "Aplicación lógica desarrollada en JavaScript para cifrado y descifrado de texto mediante manipulación dinámica y procesamiento de entradas.",
    tech: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
    gallery: ["assets/images/encriptador_texto.webp"],
    demo: "https://edvalerawork.github.io/Encriptador-texto/",
    github: "https://github.com/edvalerawork/Encriptador-texto",
  },

  {
    title: "Juego del número secreto",
    image: "assets/images/juego_secreto.webp",
    description:
      "Proyecto interactivo centrado en lógica de programación, validaciones dinámicas y experiencia de usuario orientada al aprendizaje.",
    tech: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
    gallery: ["assets/images/juego_secreto.webp"],
    demo: "https://edvalerawork.github.io/juego-secreto/",
    github: "https://github.com/edvalerawork/juego-secreto",
  },
];

/* Render */

function renderProject(index) {
  const project = projectData[index];

  /* Imagen principal */
  modalProjectImage.src = project.image;
  modalProjectImage.alt = project.title;

  /* Texto */
  modalProjectTitle.textContent = project.title;
  modalProjectDescription.textContent = project.description;

  /* Tecnologías */
  modalProjectTech.innerHTML = "";

  project.tech.forEach((iconClass) => {
    const icon = document.createElement("i");
    icon.className = iconClass;
    modalProjectTech.appendChild(icon);
  });

  /* Galería interactiva */
  modalProjectGallery.innerHTML = "";

  project.gallery.forEach((imgSrc, imgIndex) => {
    const img = document.createElement("img");

    img.src = imgSrc;
    img.alt = `${project.title} captura ${imgIndex + 1}`;
    img.loading = "lazy";
    img.decoding = "async";

    /* Primera miniatura activa */
    if (imgIndex === 0) {
      img.classList.add("active-thumb");
    }

    /* Click cambia imagen principal */
    img.addEventListener("click", () => {
      modalProjectImage.src = imgSrc;

      /* Reset thumbs */
      document
        .querySelectorAll(".project-modal-gallery img")
        .forEach((thumb) => {
          thumb.classList.remove("active-thumb");
        });

      img.classList.add("active-thumb");
    });

    modalProjectGallery.appendChild(img);
  });

  /* Demo */
  if (!project.demo || project.demo === "#") {
    modalProjectDemo.classList.add("disabled");
    modalProjectDemo.removeAttribute("href");
  } else {
    modalProjectDemo.classList.remove("disabled");
    modalProjectDemo.href = project.demo;
  }

  /* GitHub */
  if (!project.github || project.github === "#") {
    modalProjectGithub.classList.add("disabled");
    modalProjectGithub.removeAttribute("href");
  } else {
    modalProjectGithub.classList.remove("disabled");
    modalProjectGithub.href = project.github;
  }
}

/* Cerrar Modal */

function closeModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "";
}

/* Abrir Modal */

document.querySelectorAll(".details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentProject = parseInt(button.closest(".project-card").dataset.project);
    renderProject(currentProject);

    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

/* Eventos de cierre */

closeProjectModal?.addEventListener("click", closeModal);

projectModal?.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeModal();
  }
});

/* Navegación entre Proyectos */

function goPrevProject() {
  currentProject =
    (currentProject - 1 + projectData.length) % projectData.length;

  renderProject(currentProject);
}

function goNextProject() {
  currentProject = (currentProject + 1) % projectData.length;

  renderProject(currentProject);
}

prevProjectTop?.addEventListener("click", goPrevProject);
nextProjectTop?.addEventListener("click", goNextProject);

/* Navegación con Teclado */

document.addEventListener("keydown", (e) => {
  if (!projectModal.classList.contains("active")) return;

  if (e.key === "Escape") {
    closeModal();
  }

  if (e.key === "ArrowLeft") {
    goPrevProject();
  }

  if (e.key === "ArrowRight") {
    goNextProject();
  }
});
