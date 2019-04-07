var jogos = [
    {nome: 'jogo 1', categoria: 'ação'},
    {nome: 'jogo 2', categoria: 'corrida'},
    {nome: 'jogo 3', categoria: 'corrida'},
    {nome: 'jogo 4', categoria: 'corrida'},
    {nome: 'jogo 5', categoria: 'corrida'},
    {nome: 'jogo 6', categoria: 'corrida'}
];

// como se são todos jogos de corrida
/*
var todosJogosDeCOrrida  = true;
for(var i = 0 ; i < jogos.length ; i++){
    var jogo = jogos[i];
    if(jogo.categoria !== 'corrida'){
        todosJogosDeCOrrida = false;
        break;
    }
}
console.log(todosJogosDeCOrrida);
*/
var todosJogosCorrida = jogos.every(function (jogo) {
    return jogo.categoria === 'corrida';
});

console.log(todosJogosCorrida);
