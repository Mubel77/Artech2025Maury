// // Creá variables con tu nombre, edad y ciudad. Después, creá un mensaje usando template literals que diga: "Mi nombre es [nombre], tengo
//[edad] años y vivo en [ciudad]".


let nombre = "Maury";
let edad = 25;
let ciudad = "Buenos Aires";

console.log(` mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);


//Creá dos variables con números. Calculá y mostrá en consola: la suma,resta, multiplicación, división y
//  el módulo de esos números.
let num1 = 10;
let num2 = 5;

console.log(`la suma es: ${num1 + num2}`);
console.log(`la resta es: ${num1 - num2}`);
console.log(`la multiplicación es: ${num1 * num2}`);
console.log(`la división es: ${num1 / num2}`);
console.log(`el módulo es: ${num1 % num2}`);

        //   Probá las siguientes comparaciones y explicá por qué dan ese
        //   resultado:
        // </p>
        // <ul>
        //   <li><code>10 == "10"</code></li>
        //   <li><code>10 === "10"</code></li>
        //   <li><code>true == 1</code></li>
        //   <li><code>true === 1</code></li>
        // </ul>

console.log(10 == "10"); // true, porque el operador == convierte el string "10" a número antes de comparar.
console.log(10 === "10"); // false, porque el operador === compara tanto el valor como el tipo de dato, y aquí son diferentes.
console.log(true == 1); // true, porque el operador == convierte true a 1 antes de comparar.
console.log(true === 1); // false, porque el operador === compara tanto el valor como el tipo de dato,
//  y aquí son diferentes.

// jercicio 4: Mayor de Edad.Creá una función llamada <code>esMayorDeEdad</code> que reciba una
//           edad y retorne <code>true</code> si es mayor o igual a 18, y
//           <code>false</code> en caso contrario. Probala con diferentes valores.

function esMayorDeEdad(edad) {
    if(edad >= 18 ){
        return true;
    } else {
        return false;
    }
};
console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(16)); // false

// Ejercicio 5: Par o Impar.  Creá una función que reciba un número y retorne "Par" si el número es par, 
// o "Impar" si es impar.
parImpar = (num) => {
    if(num % 2 === 0){
        return "Par";
    }else{
        return "Impar";
    }
};
console.log(parImpar(4)); // Par
console.log(parImpar(7)); // Impar

// Ejercicio 6: Calificación</h3>
//         <p>Creá una función que reciba una nota (0-100) y retorne:</p>
//         <ul>
//           <li>"Excelente" si la nota es >= 90</li>
//           <li>"Muy bien" si está entre 75 y 89</li>
//           <li>"Bien" si está entre 60 y 74</li>
//           <li>"Aprobado" si está entre 50 y 59</li>
//           <li>"Reprobado" si es menor a 50</li>

calificacion = (nota) => nota >= 90 ? "Excelente" :
    nota >= 75 ? "Muy bien" :
    nota >= 60 ? "Bien" :
    nota >= 50 ? "Aprobado" : "Reprobado";  
console.log(calificacion(95)); // Excelente
console.log(calificacion(80)); // Muy bien     
console.log(calificacion(65)); // Bien
console.log(calificacion(55));  // Aprobado
console.log(calificacion(40)); // Reprobado


// Ejercicio 7: Tabla de Multiplicar</h3>
//         <p>
//           Creá una función que reciba un número y muestre en consola su tabla de
//           multiplicar del 1 al 10.

tablaMultiplicar = (num) => {
    numMutiplicado = 1;
        while(numMutiplicado <= 10){
            console.log(`${num} x ${numMutiplicado} = ${num * numMutiplicado}`);
            numMutiplicado++;
        }
};
let numMutiplicado = 1;
tablaMultiplicar(5); // Muestra la tabla de multiplicar del 5

// Ejercicio 8: Suma de Números</h3>
//         <p>
//           Creá una función que sume todos los números del 1 hasta N (donde N es
//           el parámetro que recibe la función).

function sumaHastaN(N) {
    let suma = 0;  
    for (let i = 1; i <= N; i++) {
        suma += i; 
    }  
    return suma;
}

console.log(sumaHastaN(5)); // 15 (1+2+3+4+5 = 15

// Ejercicio 9: Número Primo</h3>
//         <p>
//           Creá una función que determine si un número es primo o no. Un número
//           primo solamente es divisible por 1 y por sí mismo.
//         </p>

esPrimo = (num) => num % 1 === 0 && num % num === 0 && num > 1 ? true : false;

console.log(esPrimo(2));

// Ejercicio 10: FizzBuzz</h3>
//         <p>
//           Escribí una función que imprima los números del 1 al 100, pero:
//         </p>
//         <ul>
//           <li>Para múltiplos de 3, imprime "Fizz" en lugar del número</li>
//           <li>Para múltiplos de 5, imprime "Buzz"</li>
//           <li>
//             Para números que son múltiplos de ambos 3 y 5, imprime "FizzBuzz"
//           </li>

FizzBuzz = () => {
    for(let i = 1; i <= 100; i++) {
        console.log(
            i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" :
            i % 3 === 0 ? "Fizz" :
            i % 5 === 0 ? "Buzz" : 
            i
        );
    }
}

FizzBuzz();

// >Ejercicio 11: Calculadora Completa</h3>
//         <p>
//           Creá una función calculadora que reciba dos números y una operación
//           (como string: "sumar", "restar", "multiplicar", "dividir") y retorne
//           el resultado. Tiene que manejar el caso de división por cero.
//         </p>

function calculadora(num1, num2, operacion) {
    switch(operacion) {
        case "sumar":   
            return num1 + num2;
            break;
        case "restar":
            return num1 - num2; 
            break;
        case "multiplicar":
            return num1 * num2; 
            break;
        case "dividir":
           return num2 === 0 ? 
           console.log("Error: División por cero") : num1 / num2; 
            break;
        default:
            return "Operación no válida";
    }   
}
console.log (calculadora(10, 5, "sumar")); // 15
console.log(calculadora(10, 0, "dividir")); // Error: División por cero  
console.log(calculadora(10, 5, "multiplicar")); // 50
console.log(calculadora(10, 5, "restar")); // 5
console.log(calculadora(10, 5, "modulo")); // Operación no válida    


// jercicio 12: Contador de Vocales</h3>
//         <p>
//           Creá una función que reciba un string y cuente cuántas vocales tiene
//           (a, e, i, o, u). Tiene que funcionar con mayúsculas y minúsculas.
//         </p>

function contarVocales(str) {
let contador = 0;
for (let i = 0; i < str.length; i++) {
const c = str[i];
switch (c) {
case 'a': case 'e': case 'i': case 'o': case 'u':
case 'A': case 'E': case 'I': case 'O': case 'U':
contador++;
break;
default:
// no es vocal
}
}
return contador;
}
console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("JavaScript")); // 3