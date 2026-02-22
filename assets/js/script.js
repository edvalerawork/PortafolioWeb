const toggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    toggle.classList.remove('active');
  });
});


const emailEl = document.getElementById("email");
if (emailEl) {
  const p1 = "ed";
  const p2 = "valera";
  const p3 = "work";
  const p4 = "gmail";
  const email = `${p1}.${p2}.${p3}@${p4}.com`;

  emailEl.innerHTML = `<a href="mailto:${email}">${email}</a>`;
}



// Modal Certificaciones (solo lista + abrir en nueva pestaña)
const openCerts = document.getElementById("openCerts");
const certModal = document.getElementById("certModal");
const closeCerts = document.getElementById("closeCerts");
const certList = document.getElementById("certList");

// Lista de certificados
const certs = [
  {
    name: "MTPE CAPACITA-T | 2026",
    meta: "Certificado Desarrollo Front-End",
    src: "assets/certs/Certificado_Desarrollo_Web_Front-end.pdf"
  },
  {
    name: "Instituto Certus | 2025",
    meta: "Certificado Módular: Pruebas e Implementación de Software",
    src: "assets/certs/Certificado_Modular_Pruebas.pdf"
  },
  {
    name: "Instituto Certus | 2022",
    meta: "Certificado Módular: Desarrollo de Software",
    src: "assets/certs/Certificado_Modular_Desarrollo.pdf"
  }
];

function modalOpen() {
  certModal.classList.add("is-open");
  certModal.setAttribute("aria-hidden", "false");
}

function modalClose() {
  certModal.classList.remove("is-open");
  certModal.setAttribute("aria-hidden", "true");
}

function renderList() {
  certList.innerHTML = "";

  certs.forEach((c) => {
    const item = document.createElement("div");
    item.className = "cert-item";
    item.innerHTML = `
<div class="cert-item__name">${c.name}</div>
<div class="cert-item__meta">${c.meta}</div>
`;

    item.addEventListener("click", () => {
      window.open(c.src, "_blank", "noopener,noreferrer"); // Abre en otra pestaña
      modalClose(); // Opcional: cierra el modal al abrir
    });

    certList.appendChild(item);
  });
}

if (openCerts) {
  openCerts.addEventListener("click", () => { renderList(); modalOpen(); });
  openCerts.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      renderList();
      modalOpen();
    }
  });
}

closeCerts?.addEventListener("click", modalClose);
certModal?.addEventListener("click", (e) => { if (e.target === certModal) modalClose(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certModal?.classList.contains("is-open")) modalClose();
});