// Array global que almacenará los robots cargados o nuevos
let robots = [];

// Cargar robots existentes del JSON
async function cargarRobots() {
  try {
    const respuesta = await fetch("../data/robots.json");
    if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");

    const datos = await respuesta.json();
    robots = Array.isArray(datos.robots) ? datos.robots : [];
    renderizarRobots();
  } catch (error) {
    console.error("Error al cargar robots:", error);
  }
}

// Renderiza todas las cards de robots
function renderizarRobots() {
  const contenedor = document.getElementById("cards-container");

  if (!contenedor) {
    console.warn("No se encontró el contenedor de las tarjetas.");
    return;
  }

  contenedor.innerHTML = "";

  if (robots.length === 0) {
    contenedor.innerHTML = "<p class='sin-robots'>No hay robots cargados.</p>";
    return;
  }

  robots.forEach((robot) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img class="card-image" src="${robot.foto}" alt="${robot.nombre}">
      <div class="card-content">
        <h2 class="card-title">${robot.nombre}</h2>
        <div class="card-info">
          <span class="card-badge edad">${robot.edad} años</span>
          <span class="card-badge profesion"> ${robot.profesion}</span>
        </div>
        <p class="card-description">${robot.descripcion}</p>
        <button class="card-button eliminar">Eliminar</button>
      </div>
    `;

    // Botón eliminar
    const btnEliminar = card.querySelector(".eliminar");
    btnEliminar.addEventListener("click", () => eliminarRobot(robot.id));

    contenedor.appendChild(card);
  });
}

// Eliminar robot por su id
function eliminarRobot(id) {
  robots = robots.filter((robot) => robot.id !== id);
  renderizarRobots();
}

// Función común que realiza las validaciones y agrega el robot
function agregarRobotDesdeFormulario(form) {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const profesion = document.getElementById("profesion").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const foto = document.getElementById("foto").value.trim();

  // Validaciones
  if (!nombre || !edad || !profesion || !descripcion || !foto) {
    alert(" Por favor, completa todos los campos.");
    return false;
  }

  if (isNaN(edad) || edad <= 0) {
    alert(" La edad debe ser un número positivo.");
    return false;
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
  form.reset();
  return true;
}

// Maneja el envío del formulario
const form = document.getElementById("robotForm");

if (form) {
  // Envío por submit (botón tipo="submit" o llamada directa)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarRobotDesdeFormulario(form);
  });

  // Permitir enviar el formulario al presionar Enter en inputs (excepto textarea)
  form.addEventListener("keydown", (e) => {
    // Si la tecla no es Enter, salimos
    if (e.key !== "Enter") return;

    // Si el target es textarea, dejamos que haga su salto de línea
    const targetTag = e.target.tagName.toLowerCase();
    if (targetTag === "textarea") return;

    // Evitamos el comportamiento por defecto (para evitar dobles o efectos indeseados)
    e.preventDefault();

    // Intentamos enviar: llamamos a la misma función del submit
    agregarRobotDesdeFormulario(form);
  });
} else {
  console.warn(" No se encontró el formulario #robotForm en el DOM.");
}

// Cargar robots al inicio
document.addEventListener("DOMContentLoaded", cargarRobots);
