// 8. Ejecutar un callback después de 2 segundos
function ejecutarDespues(callback) {
  setTimeout(callback, 2000);
}

ejecutarDespues(() => {
  console.log("Han pasado 2 segundos"); // se imprime después de 2s
});


// 9. Promesa que devuelve mensaje de éxito después de 3 segundos
const miPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("¡Éxito después de 3 segundos!");
  }, 3000);
});

miPromesa.then((mensaje) => console.log(mensaje));


// 10. ¿Cuándo usar callback vs promesa?
/*
  CALLBACK: conveniente para operaciones simples y únicas,
  como un setTimeout o un evento de click.

  PROMESA: necesaria cuando se trabaja con operaciones asíncronas
  encadenadas, cuando se necesita manejar errores con .catch(),
  o cuando el resultado se usará en múltiples lugares.
  Las promesas evitan el "callback hell".
*/


// 11. Encadenamiento de promesas
const paso1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const paso2 = (n) => new Promise(resolve => setTimeout(() => resolve(n + 1), 1000));
const paso3 = (n) => new Promise(resolve => setTimeout(() => resolve(n + 1), 1000));

paso1()
  .then(res => paso2(res))
  .then(res => paso3(res))
  .then(res => console.log("Resultado final:", res)); // 3


// 12. Callback hell → reescrito con async/await
// ❌ Con callbacks anidados (difícil de leer)
setTimeout(() => {
  console.log("Paso 1");
  setTimeout(() => {
    console.log("Paso 2");
    setTimeout(() => {
      console.log("Paso 3");
    }, 1000);
  }, 1000);
}, 1000);

// ✅ Con async/await (limpio y mantenible)
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutarPasos() {
  await esperar(1000); console.log("Paso 1");
  await esperar(1000); console.log("Paso 2");
  await esperar(1000); console.log("Paso 3");
}
ejecutarPasos();


// 13. Promesas anidadas → reescrito con async/await

// Funciones simuladas
function obtenerUsuario() {
  return new Promise(resolve => setTimeout(() => resolve({ id: 1, nombre: "Israel" }), 500));
}
function obtenerPedidos(idUsuario) {
  return new Promise(resolve => setTimeout(() => resolve([{ id: 101 }, { id: 102 }]), 500));
}
function obtenerDetalle(idPedido) {
  return new Promise(resolve => setTimeout(() => resolve("Detalle del pedido #" + idPedido), 500));
}

// ❌ Con promesas anidadas
obtenerUsuario()
  .then(usuario => {
    obtenerPedidos(usuario.id)
      .then(pedidos => {
        obtenerDetalle(pedidos[0].id)
          .then(detalle => console.log("Anidado:", detalle));
      });
  });

// ✅ Con async/await
async function mostrarDetalle() {
  const usuario = await obtenerUsuario();
  const pedidos = await obtenerPedidos(usuario.id);
  const detalle = await obtenerDetalle(pedidos[0].id);
  console.log("Async/await:", detalle);
}
mostrarDetalle();

// 14. Convertir una promesa en un callback
function promesaACallback(promesa, callback) {
  promesa
    .then(resultado => callback(null, resultado))
    .catch(error => callback(error, null));
}

const p = new Promise(resolve => setTimeout(() => resolve("datos"), 1000));
promesaACallback(p, (err, resultado) => {
  if (err) console.log("Error:", err);
  else console.log("Resultado:", resultado); // "datos"
});


// 15. Convertir un callback en una promesa
function leerArchivoCallback(nombre, callback) {
  setTimeout(() => callback(null, "contenido de " + nombre), 1000);
}

function leerArchivoPromesa(nombre) {
  return new Promise((resolve, reject) => {
    leerArchivoCallback(nombre, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

leerArchivoPromesa("datos.txt").then(data => console.log(data));


function obtenerDatos() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("Error:", err));
}

// Con async/await
async function obtenerDatosAsync() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
obtenerDatosAsync();