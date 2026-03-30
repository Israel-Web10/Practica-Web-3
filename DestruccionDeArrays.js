// 6. Tomar los dos primeros elementos y almacenarlos en dos variables
const arr = [10, 20, 30, 40, 50];

const [primero, segundo] = arr;

console.log(primero); // 10
console.log(segundo);  // 20


// 7. Almacenar el resto de los elementos (sin los dos primeros)
const arr2 = [10, 20, 30, 40, 50];

const [a, b, ...resto] = arr2;

console.log(resto); // [30, 40, 50]
console.log("Archivo numero 2")