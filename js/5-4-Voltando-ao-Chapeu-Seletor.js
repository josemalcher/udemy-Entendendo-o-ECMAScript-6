var chapeuSeletor = function (pessoa) {
    var casas = ['Belém','Cametá','Castanhal','Mosqueiro'];
    var casa = casas[Math.floor(Math.random() * casas.length)];

    console.log("Pessoa: " + pessoa + " Casa: "+ casa);
}

var pessoas = ['José', 'Luciana','Vovó', 'Mayque de Mosqueiro'];
/*
var iterador = pessoas[Symbol.iterator]();
var done = false;
var proximo = iterador.next();
do{
    var pessoa = proximo.value;
    chapeuSeletor(pessoa);
    proximo = iterador.next();
}while(!proximo.done);
*/
for(var pessoa of pessoas){
    chapeuSeletor(pessoa);
}
