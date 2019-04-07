var jogos = [
    {nome: 'jogo 1', categoria: 'ação'},
    {nome: 'jogo 2', categoria: 'plataforma'},
    {nome: 'jogo 3', categoria: 'tipo 1'},
    {nome: 'jogo 4', categoria: 'aventura'},
    {nome: 'jogo 5', categoria: 'shooter'},
    {nome: 'jogo 6', categoria: 'corrida'}
];

// como se há pelo menos um jogo de corrida?
/*
var temJogoDeCorrida = false;
for(var i = 0 ; i < jogos.length ; i++){
    var jogo = jogos[i];
    if(jogo.categoria === 'corrida'){
        temJogoDeCorrida = true;
        break;
    }
}
*/

var temJogoDeCorrida = jogos.some(function (jogo) {
    return jogo.categoria === 'corrida';
});

console.log("Tem jogo de corrida? R: ", temJogoDeCorrida);
