// 1. Contar vocales en un texto
function contarVocales(texto) {
  let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let letra of texto.toLowerCase()) {
    if (obj[letra] !== undefined) obj[letra]++;
  }
  return obj;
}

let obj1 = contarVocales("euforia");
console.log(obj1); // { a: 1, e: 1, i: 1, o: 1, u: 1 }


// 2. Invertir el orden de los caracteres de una cadena
function invertirCadena(cad) {
  return cad.split("").reverse().join("");
}

let cad = invertirCadena("abcd");
console.log(cad); // dcba


// 3. Separar pares e impares de un arreglo
function paresImpares(arr) {
  return {
    pares: arr.filter(n => n % 2 === 0),
    impares: arr.filter(n => n % 2 !== 0)
  };
}

let obj3 = paresImpares([1, 2, 3, 4, 5]);
console.log(obj3); // { pares: [2, 4], impares: [1, 3, 5] }


// 4. Mayor y menor de un arreglo
function mayorMenor(arr) {
  return {
    mayor: Math.max(...arr),
    menor: Math.min(...arr)
  };
}

let obj4 = mayorMenor([3, 1, 5, 4, 2]);
console.log(obj4); // { mayor: 5, menor: 1 }


// 5. Verificar si una cadena es palíndromo
function esPalindromo(cad) {
  let invertida = cad.split("").reverse().join("");
  return cad === invertida;
}

let band1 = esPalindromo("oruro");
console.log(band1); // true

let band2 = esPalindromo("hola");
console.log(band2); // false