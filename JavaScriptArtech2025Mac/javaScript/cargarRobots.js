/**
 * Script para cargar robots desde JSON y mostrar las tarjetas
 * 
 * Este archivo:
 * 1. Carga los datos de robots desde data/robots.json
 * 2. Procesa el array de robots
 * 3. Crea dinámicamente las cards HTML
 * 4. Las inserta en el contenedor
 * 
 * Concepto importante: Separar datos (JSON) de la lógica de presentación
 */

// Variable global para almacenar los robots
let robots = [];

/**
 * Función para cargar datos desde el archivo JSON
 * Usa fetch API para hacer una petición asincrónica
 */
async function cargarRobots() {
  try {
    // Construir la ruta correcta al archivo JSON
    // Desde views/card.html → ../data/robots.json
    const rutaJSON = '../data/robots.json';
    
    // Realizar la petición
    const respuesta = await fetch(rutaJSON);
    
    // Validar que la respuesta sea correcta
    if (!respuesta.ok) {
      throw new Error(`Error al cargar: ${respuesta.status}`);
    }
    
    // Convertir la respuesta a JSON
    const datos = await respuesta.json();
    
    // Guardar los robots en la variable global
    robots = datos.robots;
    
    // Renderizar las tarjetas
    renderizarRobots();
    
    console.log('✅ Robots cargados correctamente:', robots);
    
  } catch (error) {
    console.error('❌ Error al cargar los robots:', error);
    mostrarError('No se pudieron cargar los robots. Intenta recargar la página.');
  }
}

/**
 * Función para crear la HTML de una tarjeta de robot
 * @param {Object} robot - Objeto con los datos del robot
 * @returns {string} HTML de la tarjeta
 */
function crearCard(robot) {
  return `
    <div class="card" data-id="${robot.id}">
      <img class="card-image" src="${robot.foto}" alt="${robot.nombre}">
      <div class="card-content">
        <h2 class="card-title">${robot.nombre}</h2>
        <div class="card-info">
          <span class="card-badge edad">📅 ${robot.edad} años</span>
          <span class="card-badge profesion">💼 ${robot.profesion}</span>
        </div>
        <p class="card-description">${robot.descripcion}</p>
        <button class="card-button" onclick="verDetalles(${robot.id})">Ver más</button>
      </div>
    </div>
  `;
}

/**
 * Función para renderizar todos los robots
 * Genera el HTML de todas las tarjetas e inserta en el DOM
 */
function renderizarRobots() {
  const contenedor = document.getElementById('cards-container');
  
  if (!contenedor) {
    console.error('❌ No se encontró el contenedor #cards-container');
    return;
  }
  
  // Limpiar contenedor
  contenedor.innerHTML = '';
  
  // Crear HTML de todas las tarjetas
  const htmlCards = robots.map(robot => crearCard(robot)).join('');
  
  // Insertar en el DOM
  contenedor.innerHTML = htmlCards;
  
  // Log de confirmación
  console.log(`✅ ${robots.length} robots renderizados`);
}

/**
 * Función para mostrar detalles de un robot
 * @param {number} id - ID del robot
 */
function verDetalles(id) {
  const robot = robots.find(r => r.id === id);
  
  if (robot) {
    alert(`
      Nombre: ${robot.nombre}
      Edad: ${robot.edad} años
      Profesión: ${robot.profesion}
      
      ${robot.descripcion}
    `);
  }
}

/**
 * Función para mostrar mensajes de error en la página
 * @param {string} mensaje - Mensaje a mostrar
 */
function mostrarError(mensaje) {
  const contenedor = document.getElementById('cards-container');
  
  if (contenedor) {
    contenedor.innerHTML = `
      <div class="error-message">
        <h3>⚠️ Error</h3>
        <p>${mensaje}</p>
      </div>
    `;
  }
}

/**
 * Función para filtrar robots por profesión
 * @param {string} profesion - Profesión a filtrar
 */
function filtrarPorProfesion(profesion) {
  const robotsFiltrados = robots.filter(robot => 
    robot.profesion.toLowerCase().includes(profesion.toLowerCase())
  );
  
  console.log(`Robots encontrados con profesión "${profesion}":`, robotsFiltrados);
  
  // Mostrar los filtrados (opcional: crear versión que solo muestre estos)
  return robotsFiltrados;
}

/**
 * Función para obtener estadísticas de los robots
 */
function obtenerEstadisticas() {
  const stats = {
    total: robots.length,
    edadPromedio: (robots.reduce((sum, r) => sum + r.edad, 0) / robots.length).toFixed(1),
    edadMaxima: Math.max(...robots.map(r => r.edad)),
    edadMinima: Math.min(...robots.map(r => r.edad)),
    profesiones: [...new Set(robots.map(r => r.profesion))]
  };
  
  console.log('📊 Estadísticas de Robots:', stats);
  return stats;
}

/**
 * Event Listener: Cargar robots cuando el DOM esté listo
 * Esto asegura que los elementos HTML existan antes de manipularlos
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Iniciando aplicación...');
  cargarRobots();
});
