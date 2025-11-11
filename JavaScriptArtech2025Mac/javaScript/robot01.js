const robots = [
  {
    nombre: "Robot 1",
    edad: 28,
    profesion: "Frontend Developer",
    descripcion:
      "Apasionada por crear interfaces intuitivas y accesibles. Me encanta aprender nuevas tecnologías y compartir conocimiento.",
    foto: "https://robohash.org/1.png",
  },
  {
    nombre: "Robot 2",
    edad: 32,
    profesion: "Diseñador UX/UI",
    descripcion:
      "Creo experiencias digitales que conectan con las personas. El diseño es mi forma de resolver problemas.",
    foto: "https://robohash.org/2.png",
  },
  {
    nombre: "Robot 3",
    edad: 25,
    profesion: "Data Scientist",
    descripcion:
      "Transformo datos en insights valiosos. Fascinada por el machine learning y la visualización de datos.",
    foto: "https://robohash.org/3.png",
  },
  {
    nombre: "Robot 4",
    edad: 30,
    profesion: "Backend Developer",
    descripcion:
      "Construyo la arquitectura que hace funcionar las aplicaciones. Me especializo en Node.js y bases de datos.",
    foto: "https://robohash.org/4.png",
  },
];

// Función para crear una card:
function crearCard(robot) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img class="card-image" src="${robot.foto}" alt="${robot.nombre}">
    <div class="card-content">
      <h2 class="card-title">${robot.nombre}</h2>
      <div class="card-info">
        <span class="card-badge edad">${robot.edad} años</span>
        <span class="card-badge profesion">${robot.profesion}</span>
      </div>
      <p class="card-description">${robot.descripcion}</p>
    </div>
  `;

  document.getElementById("cards-container").appendChild(card);
}

// Carga todas las cards:
robots.forEach((robot) => crearCard(robot));