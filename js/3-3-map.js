/*
var numeros = [1,2,3];
var dobro = [];

numeros.forEach(function (numero) {
    dobro.push(numero * 2);
});

console.log(dobro);
*/

var numeros = [1,2,3];

var dobro = numeros.map(function (numero) {
    return numero * 2;
});

console.log(dobro);
console.log(numeros);
