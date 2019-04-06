var nomes = ['maria', 'josé', 'luciana'];
for(var i = 0; i < nomes.length ; i++){
    console.log(nomes[i]);
}

console.log('------------------');

nomes.forEach(function (nome) {
   console.log(nome);
});
console.log('------------------');

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);

console.log('------------------');

var canais = ['globo','sbt', 'record'];

canais.forEach(function (canal) {
    console.log(canal);
    canais.push('REDE TV'); //este item será ignorado
});
console.log(canais);


console.log('------------------');
var numeros = [1,2,3,4,5];
numeros.forEach(function(numero){
    console.log(numero);
});