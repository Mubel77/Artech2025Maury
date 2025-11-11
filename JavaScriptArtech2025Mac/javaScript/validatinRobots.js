// Array global que almacenará los robots cargados o nuevos
let robots = [];

// Cargar robots existentes del JSON
async function cargarRobots() {
  try {
    const respuesta = await fetch("../data/robots.json");
    if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");
    const datos = await respuesta.json();
    robots = datos.robots || [];
    renderizarRobots();
  } catch (error) {
    console.error("Error al cargar robots:", error);
  }
}

// Renderiza todas las cards
function renderizarRobots() {
  const contenedor = document.getElementById("cards-container");
  contenedor.innerHTML = "";

  robots.forEach((robot) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img class="card-image" src="${robot.foto}" alt="${robot.nombre}">
      <div class="card-content">
        <h2 class="card-title">${robot.nombre}</h2>
        <div class="card-info">
          <span class="card-badge edad">📅 ${robot.edad} años</span>
          <span class="card-badge profesion">💼 ${robot.profesion}</span>
        </div>
        <p class="card-description">${robot.descripcion}</p>
        <button class="card-button eliminar">Eliminar</button>
      </div>
    `;

    // Botón eliminar
    card.querySelector(".eliminar").addEventListener("click", () => {
      robots = robots.filter((r) => r !== robot);
      renderizarRobots();
    });

    contenedor.appendChild(card);
  });
}

// Maneja el envío del formulario
document.getElementById("robotForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const profesion = document.getElementById("profesion").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const foto = document.getElementById("foto").value.trim();

  // Validaciones simples
  if (!nombre || !edad || !profesion || !descripcion || !foto) {
    alert("⚠️ Por favor, completa todos los campos.");
    return;
  }

  if (isNaN(edad) || edad <= 0) {
    alert("⚠️ La edad debe ser un número positivo.");
    return;
  }

  // Crear objeto robot
  const nuevoRobot = {
    id: Date.now(),
    nombre,
    edad,
    profesion,
    descripcion,
    foto,
  };

  // Agregar al array y renderizar
  robots.push(nuevoRobot);
  renderizarRobots();

  // Limpiar formulario
  e.target.reset();
});

// Cargar robots al inicio
document.addEventListener("DOMContentLoaded", cargarRobots);
