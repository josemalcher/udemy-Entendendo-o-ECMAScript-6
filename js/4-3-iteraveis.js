// alguns objetos no JavaScript já são iteraveis por padrão
// arrays
// string
// maps e sets

// basta a gente obter o seu iterador...
var pessoas = ['jose', 'maria', 'ronny', 'mateus', 'jorge'];
var interadorPessoas = pessoas[Symbol.iterator]();
console.log(interadorPessoas.next());
console.log(interadorPessoas.next());
console.log(interadorPessoas.next());
console.log(interadorPessoas.next());
console.log(interadorPessoas.next());
console.log(interadorPessoas.next());
console.log(interadorPessoas.next());