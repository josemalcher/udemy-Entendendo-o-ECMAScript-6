var carro = {
    modelo: 'fiat',
    ano: 2000
};

for(var propriedade in carro){
    var info = carro[propriedade];
    console.log(info);
}