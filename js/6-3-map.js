// map
var map = new Map();
function funcao(){};
var objeto = {};

map.set("String", "Sou uma String");
map.set("String2", "Sou uma String");
map.set("String3", "Sou uma String");
map.set(objeto, "Sou um objeto");
map.set(funcao, "Sou uma função");

// GET

console.log(map.get("String"));
console.log(map.get(objeto));
console.log(map.get(funcao));
/* 
Sou uma String
Sou um objeto
Sou uma função 
*/

console.log("Tamanho = "+map.size); 

// HAS
console.log(map.has("String")); // true
console.log(map.has("String99")); // false

// DELETE
map.delete("String");
console.log(map.has("String")); // false

// CLEAR - remove todos os elementos do map
console.log(map.size); // 4 elementos
//map.clear();
console.log(map.size); // 0 elementos

console.log("---------------------------")
/* E como vimos nos capítulos anteriores, o Map é um objeto iterável. 
Sendo assim, podemos utilizar o laço for...of para iterá-los através 
dos métodos: keys, values e entries. 
Eles retornam todas as chaves, todos os valores e todas as 
entradas (par chave/valor), respectivamente. */
for (var chave of map.keys()){
    console.log(chave);
}

for(var valor of map.values()){
    console.log(valor);
}

for(var entrada of map.entries()){
    console.log(entrada);
}