// 📦 Ejercicios de Arrays Básicos</h2>
        
        // <!-- EJERCICIO 1 -->
        //     <span class="difficulty easy">Fácil</span>
        //     <h3>Ejercicio 1: Crear y Manipular Arrays</h3>
        //     <p>Creá un array con 5 nombres de tus películas favoritas. Después:</p>
        //     <ul>
        //         <li>Agregá una película al final</li>
        //         <li>Agregá una al principio</li>
        //         <li>Eliminá la última película</li>
        //         <li>Mostrá la cantidad total de películas</li>

const peliculasFavoritas = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"];


console.log(peliculasFavoritas.push("Forrest Gump")); // Agregar al final
console.log(peliculasFavoritas.unshift("The Shawshank Redemption")); // Agregar al principio
console.log(peliculasFavoritas.pop()); // Eliminar la última película
console.log("Cantidad total de películas:", peliculasFavoritas.length);


// Ejercicio 2: Acceso a Elementos</h3>
//             <p>Dado el array: <code>const numeros = [10, 20, 30, 40, 50, 60];</code></p>
//             <ul>
//                 <li>Obtené el primer elemento</li>
//                 <li>Obtené el último elemento (sin hardcodear el índice)</li>
//                 <li>Obtené el elemento del medio</li>
//                 <li>Modificá el tercer elemento para que valga 99</li>
//             </ul>

const numeros1 = [10, 20, 30, 40, 50, 60];
console.log("Primer elemento:", numeros1[0]); // Primer elemento
console.log("Último elemento:", numeros1[numeros1.length - 1]); // Último elemento
console.log("Elemento del medio:", numeros1[Math.floor(numeros1.length / 2)]); // Elemento del medio
numeros1[2] = 99; // Modificar el tercer elemento
console.log("Array modificado:", numeros1);

// Ejercicio 3: forEach - Mostrar con Formato</h3>
//             <p>Dado el array de nombres: <code>["Ana", "Juan", "María", "Pedro"]</code></p>
//             <p>Usa <code>forEach</code> para mostrar cada nombre con el formato: "Hola, [nombre]!

const nombres = ["Ana", "Juan", "María", "Pedro"];
nombres.forEach(nombre => {
    console.log(`Hola, ${nombre}!`);
});

// Ejercicio 4: map - Transformar Datos</h3>
//             <p>Dado el array: <code>const precios = [100, 200, 350, 80, 120];</code></p>
//             <p>Usa <code>map</code> para crear un nuevo array donde cada precio tenga un 15% de descuento.</p>
const precios = [100, 200, 350, 80, 120];
const preciosConDescuento = precios.map(precio => precio * 0.85);
console.log("Precios con descuento:", preciosConDescuento);

// EJERCICIO 5 -->
//         <div class="exercise">
//             <span class="difficulty medium">Medio</span>
//             <h3>Ejercicio 5: map con Objetos</h3>
//             <p>Dado el array de usuarios:</p>
//             <div class="code-example">
// const usuarios = [
//     { nombre: "Ana", edad: 25 },
//     { nombre: "Juan", edad: 30 },
//     { nombre: "María", edad: 28 }
// ];
//             </div>
//             <p>Usa <code>map</code> para crear un nuevo array que solo contenga los nombres en mayúsculas.</p>


 const usuarios = [
     { nombre: "Ana", edad: 25 },
     { nombre: "Juan", edad: 30 },
     { nombre: "María", edad: 28 }
 ];
 const nombresMayusculas = usuarios.map(usuario => usuario.nombre.toUpperCase());
 console.log("Nombres en mayúsculas:", nombresMayusculas);

//  Ejercicio 6: filter - Filtrar Números</h3>
//             <p>Dado el array: <code>const numeros = [5, 12, 8, 21, 3, 18, 30, 7];</code></p>
//             <p>Usa <code>filter</code> para:</p>
//             <ul>
//                 <li>Obtener solo los números mayores a 10</li>
//                 <li>Obtener solo los números pares</li>
//                 <li>Obtener los números que son mayores a 10 Y pares</li>
//             </ul>
const numerosFilter = [5, 12, 8, 21, 3, 18, 30, 7];
const mayoresA10 = numerosFilter.filter(num => num > 10);
const numerosPares = numerosFilter.filter(num => num % 2 === 0);
const mayoresA10YPares = numerosFilter.filter(num => num > 10 && num % 2 === 0);
console.log("Números mayores a 10:", mayoresA10);
console.log("Números pares:", numerosPares);
console.log("Números mayores a 10 y pares:", mayoresA10YPares);


// Ejercicio 7: filter - Filtrar Productos</h3>
//             <p>Dado el array de productos:</p>
//             <div class="code-example">
// const productos = [
//     { nombre: "Laptop", precio: 1000, categoria: "tech" },
//     { nombre: "Camisa", precio: 50, categoria: "ropa" },
//     { nombre: "Mouse", precio: 25, categoria: "tech" },
//     { nombre: "Pantalón", precio: 80, categoria: "ropa" },
//     { nombre: "Teclado", precio: 75, categoria: "tech" }
// ];
//             </div>
//             <p>Usa <code>filter</code> para obtener:</p>
//             <ul>
//                 <li>Solo productos de tecnología</li>
//                 <li>Productos que cuesten menos de $100</li>

 const productos = [
     { nombre: "Laptop", precio: 1000, categoria: "tech" },
     { nombre: "Camisa", precio: 50, categoria: "ropa" },
     { nombre: "Mouse", precio: 25, categoria: "tech" },
     { nombre: "Pantalón", precio: 80, categoria: "ropa" },
     { nombre: "Teclado", precio: 75, categoria: "tech" }
 ];
const techBaratos = productos.filter((p) => {
    return p.categoria === "tech" && p.precio < 100;
});
console.log("Productos de tecnología baratos:", techBaratos);

// Ejercicio 8: find - Encontrar Elemento</h3>
//             <p>Dado el array de estudiantes:</p>
//             <div class="code-example">
// const estudiantes = [
//     { id: 1, nombre: "Ana", nota: 8 },
//     { id: 2, nombre: "Juan", nota: 6 },
//     { id: 3, nombre: "María", nota: 9 },
//     { id: 4, nombre: "Pedro", nota: 7 }
// ];
//             </div>
//             <p>Usa <code>find</code> para:</p>
//             <ul>
//                 <li>Encontrar el estudiante con id 3</li>
//                 <li>Encontrar el primer estudiante con nota mayor a 8</li>
//             </ul>
    const estudiantes = [
        { id: 1, nombre: "Ana", nota: 8 },
        { id: 2, nombre: "Juan", nota: 6 },
        { id: 3, nombre: "María", nota: 9 },
        { id: 4, nombre: "Pedro", nota: 7 }
    ];
    const estudianteId3 = estudiantes.find(est => est.id === 3);
    const primerEstudianteNotaAlta = estudiantes.find(est => est.nota > 8);
    console.log("Estudiante con ID 3:", estudianteId3);
    console.log("Primer estudiante con nota mayor a 8:", primerEstudianteNotaAlta);


// Ejercicio 9: reduce - Sumar y Promediar</h3>
//         <p>Dado el array: <code>const notas = [8, 7, 9, 6, 10, 7, 8];</code></p>
//         <p>Usa <code>reduce</code> para:</p>
//         <ul>
//             <li>Calcular la suma de todas las notas</li>
//             <li>Calcular el promedio</li>
//         </ul>

const notas = [8, 7, 9, 6, 10, 7, 8];
const sumaNotas = notas.reduce((acum, nota) => acum + nota, 0);
const promedioNotas = sumaNotas / notas.length;
console.log("Suma de notas:", sumaNotas);
console.log("Promedio de notas:", promedioNotas.toFixed(2));

// Ejercicio 10: reduce - Encontrar Máximo/Mínimo</h3>
//             <p>Dado el array: <code>const numeros = [45, 12, 89, 23, 67, 34, 91, 5];</code></p>
//             <p>Usá <code>reduce</code> para encontrar:</p>
//             <ul
//                 <li>El número máximo</li>
//                 <li>El número mínimo</li>
//             </ul>

const numeros = [45, 12, 89, 23, 67, 34, 91, 5];
const maximo = numeros.reduce((max, num) => (num > max ? num : max), numeros[0]);
const minimo = numeros.reduce((min, num) => (num < min ? num : min), numeros[0]);
console.log("Número máximo:", maximo); //91
console.log("Número mínimo:", minimo); //5

// Ejercicio 11: Encadenar Métodos</h3>
//             <p>Dado el array:</p>
//             <div class="code-example">
// const productos = [
//     { nombre: "Laptop", precio: 1000, enStock: true },
//     { nombre: "Mouse", precio: 25, enStock: false },
//     { nombre: "Teclado", precio: 80, enStock: true },
//     { nombre: "Monitor", precio: 300, enStock: true },
//     { nombre: "Webcam", precio: 50, enStock: false }
// ];
//             </div>
//             <p>Encadena métodos para:</p>
//             <ul>
//                 <li>Filtrar solo productos en stock</li>
//                 <li>Obtener solo los precios</li>
//                 <li>Calcular el total</li>
//             </ul>

const productosNegocios = [
    { nombre: "Laptop", precio: 1000, enStock: true },
    { nombre: "Mouse", precio: 25, enStock: false },    
    { nombre: "Teclado", precio: 80, enStock: true },
    { nombre: "Monitor", precio: 300, enStock: true },
    { nombre: "Webcam", precio: 50, enStock: false }
];

const totalEnStock = productosNegocios
    .filter(p => p.enStock) // Filtrar solo productos en stock
    .map(p => p.precio)     // Obtener solo los precios
    .reduce((acum, precio) => acum + precio, 0); // Calcular el total   
console.log("Total de productos en stock:", totalEnStock); //1380

// Ejercicio 12: Crear y Manipular Objetos</h3>
//             <p>Creá un objeto que represente un libro con las propiedades: título, autor, año, páginas.</p>
//             <p>Después:</p>
//             <ul>
//                 <li>Muestra el título y el autor</li>
//                 <li>Agrega una nueva propiedad "genero"</li>
//                 <li>Modifica el año</li>
//                 <li>Elimina la propiedad páginas</li>
//             </ul>

const libro = {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949,
    paginas: 328
};
console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`); // Mostrar título y autor
libro.genero = "Distopía"; // Agregar nueva propiedad
libro.año = 1950; // Modificar año
delete libro.paginas; // Eliminar propiedad páginas
console.log("Libro modificado:", libro);    


// Ejercicio 13: Métodos en Objetos</h3>
//             <p>Creá un objeto "calculadora" con métodos para:</p>
//             <ul>
//                 <li>sumar(a, b)</li>
//                 <li>restar(a, b)</li>
//                 <li>multiplicar(a, b)</li>
//                 <li>dividir(a, b)</li>
//             </ul>
//             <p>Probá cada método.</p>
const calculadoraObjecto = {
    "sumar": function(a, b) {
        return a + b;
    },
    "restar": function(a, b) {
        return a - b;   
    },
    "multiplicar": function(a, b) {
        return a * b;   
    },
    "dividir": function(a, b) {
        if (b === 0) {
            return "Error: División por cero";
        }
        return a / b;   
    }
};
console.log("Suma:", calculadoraObjecto.sumar(10, 5)); // 15
console.log("Resta:", calculadoraObjecto.restar(10, 5)); // 5
console.log("Multiplicación:", calculadoraObjecto.multiplicar(10, 5)); // 50
console.log("División:", calculadoraObjecto.dividir(10, 0)); // Error: División por cero
console.log("División:", calculadoraObjecto.dividir(10, 5)); // 2

// Ejercicio 14: Object.keys, values, entries</h3>
//             <p>Dado el objeto:</p>
//             <div class="code-example">
// const estudiante = {
//     nombre: "Ana",
//     edad: 20,
//     carrera: "Ingeniería",
//     promedio: 8.5
// };
//             </div>
//             <p>Usa Object.keys, Object.values y Object.entries para:</p>
//             <ul>
//                 <li>Mostrar todas las propiedades</li>
//                 <li>Mostrar todos los valores</li>
//                 <li>Iterar y mostrar cada par clave-valor</li>
//             </ul>

const estudiante = {
    nombre: "Ana",
    edad: 20,
    carrera: "Ingeniería",
    promedio: 8.5
};
console.log("Propiedades:", Object.keys(estudiante));
console.log("Valores:", Object.values(estudiante));
console.log("Claves y Valores:");
Object.entries(estudiante).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});

// jercicio 15: Análisis de Estudiantes</h3>
//             <p>Dado el array de estudiantes:</p>
//             <div class="code-example">
// const estudiantes = [
//     { nombre: "Ana", edad: 20, notas: [8, 9, 7, 8] },
//     { nombre: "Juan", edad: 22, notas: [6, 7, 8, 7] },
//     { nombre: "María", edad: 21, notas: [9, 10, 9, 10] },
//     { nombre: "Pedro", edad: 19, notas: [5, 6, 5, 6] }
// ];
//             </div>
//             <p>Calcula:</p>
//             <ul>
//                 <li>El promedio de notas de cada estudiante</li>
//                 <li>Filtrá solo los que tienen promedio >= 7</li>
//                 <li>Obtené solo los nombres de los aprobados</li>
//             </ul>

const estudiantesAnalisis = [
    { nombre: "Ana", edad: 20, notas: [8, 9, 7, 8] },
    { nombre: "Juan", edad: 22, notas: [6, 7, 8, 7] },
    { nombre: "María", edad: 21, notas: [9, 10, 9, 10] },
    { nombre: "Pedro", edad: 19, notas: [5, 6, 5, 6] }
];  
const estudiantesConPromedio = estudiantesAnalisis.map(est => {
    const sumaNotas = est.notas.reduce((acum, nota) => acum + nota, 0);
    const promedio = sumaNotas / est.notas.length;
    return { ...est, promedio };
});
const aprobados = estudiantesConPromedio.filter(est => est.promedio >= 7);
const nombresAprobados = aprobados.map(est => est.nombre);
console.log("Estudiantes con promedio:", estudiantesConPromedio);
console.log("Nombres de aprobados:", nombresAprobados); 

// Ejercicio 16: Gestión de Inventario</h3>
//             <p>Dado el inventario:</p>
//             <div class="code-example">
// const inventario = [
//     { id: 1, producto: "Laptop", precio: 1000, cantidad: 5 },
//     { id: 2, producto: "Mouse", precio: 25, cantidad: 0 },
//     { id: 3, producto: "Teclado", precio: 80, cantidad: 10 },
//     { id: 4, producto: "Monitor", precio: 300, cantidad: 3 }
// ];
//             </div>
//             <p>Calculá:</p>
//             <ul>
//                 <li>Valor total del inventario (precio × cantidad)</li>
//                 <li>Productos sin stock</li>
//                 <li>Producto más caro</li>
//             </ul>

const inventario = [
    { id: 1, producto: "Laptop", precio: 1000, cantidad: 5 },
    { id: 2, producto: "Mouse", precio: 25, cantidad: 0 },
    { id: 3, producto: "Teclado", precio: 80, cantidad: 10 },
    { id: 4, producto: "Monitor", precio: 300, cantidad: 3 }
];
const valorTotalInventario = inventario.reduce((acum, item) => acum + (item.precio * item.cantidad), 0);
const productosSinStock = inventario.filter(item => item.cantidad === 0);
const productoMasCaro = inventario.reduce((max, item) => (item.precio > max.precio ? item : max), inventario[0]);
console.log("Valor total del inventario:", valorTotalInventario);
console.log("Productos sin stock:", productosSinStock);
console.log("Producto más caro:", productoMasCaro);
