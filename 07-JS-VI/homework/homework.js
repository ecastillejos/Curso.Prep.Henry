// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada

  var suma= numeros.reduce(function (acc,elemento){
    return acc + elemento;
  },0);
  cb(suma);
}

// _______O PODRÍA SER(variante de anterior)___________
// function reducir(acc,elemento){
//   return acc+elemento;
// }
// var suma= numeros.reduce(reducir,0);
// cb(suma);
// }
//________O PODRÍA SER(imperativa)____________
// var suma=0
// for (var i=0; i<numeros.length; i++){
//   suma=suma + numeros[i];
// } 
// cb(suma);
// }

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  array.forEach(function(elemento,indice){
    cb (elemento);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  var newArray= array.map(function(el){
    return cb(el);
  })
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
