// Ejercicio 1
document.getElementById('btnTexto').addEventListener('click', () => {
  document.getElementById('texto').textContent = '¡Texto Cambiado!';
});

// Ejercicio 2
document.getElementById('btnColor').addEventListener('click', () => {
  const box = document.getElementById('colorBox');
  box.style.backgroundColor = box.style.backgroundColor === 'blue' ? 'white' : 'blue';
  box.style.color = box.style.backgroundColor === 'blue' ? 'white' : 'black';
});

// Ejercicio 3
document.getElementById('btnMostrar').addEventListener('click', () => {
  const p = document.getElementById('parrafo');
  const btn = document.getElementById('btnMostrar');
  if (p.style.display === 'none') {
    p.style.display = 'block';
    btn.textContent = 'Ocultar';
  } else {
    p.style.display = 'none';
    btn.textContent = 'Mostrar';
  }
});

// Ejercicio 4
let contador = 0;
document.getElementById('btnContar').addEventListener('click', () => {
  contador++;
  document.getElementById('contador').textContent = `Clicks: ${contador}`;
});

// Ejercicio 5
let numImg = 1;
document.getElementById('btnImagen').addEventListener('click', () => {
  numImg++;
  document.getElementById('imagen').src = `https://picsum.photos/300/200?${numImg}`;
});

// Ejercicio 6
document.getElementById('btnSaludar').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim();
  const saludo = document.getElementById('saludo');
  saludo.textContent = nombre ? `¡Hola ${nombre}!` : 'Por favor ingresa tu nombre.';
});

// Ejercicio 7
document.querySelectorAll('.botones-calc .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const op = btn.dataset.op;
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2)) {
      resultado.textContent = 'Ingresá números válidos.';
      return;
    }

    let res;
    switch (op) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? n1 / n2 : 'No se puede dividir por 0'; break;
    }
    resultado.textContent = `Resultado: ${res}`;
  });
});

// Ejercicio 8
document.getElementById('btnTarea').addEventListener('click', () => {
  const tareaInput = document.getElementById('tarea');
  const texto = tareaInput.value.trim();
  const lista = document.getElementById('lista');
  if (!texto) return alert('Ingresá una tarea.');
  
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
  tareaInput.value = '';
});
