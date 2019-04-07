var numeros = [10,10,10,20];

// como faço para obter a doma de todos os numeros?

/*var soma = 0;
for(var  i = 0 ; i < numeros.length ; i++){
    soma += numeros[i];
}*/

var soma = numeros.reduce(function (somaAux, numero) {
    return somaAux + numero;
}, 0 ); // 0 -> valor inicial de somaAux

//console.log(soma);

var alunos = [
    {nome:'joão', idade: 10},
    {nome:'josé', idade: 20},
    {nome:'marcos', idade: 30}
];

var nomes = alunos.reduce(function (arrayNomes, aluno) {
    arrayNomes.push(aluno.nome);
    return arrayNomes;
},[]);
console.log(nomes);