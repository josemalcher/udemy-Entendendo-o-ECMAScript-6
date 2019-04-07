var numeros = [1,2,3,4,5,6,7,8,9,0];

for(var numero of numeros){
    if(numero > 3){
        break;
    }
    console.log(numero);
}

console.log('--------------------');

for(var numero of numeros){
    if(numero === 3){
        continue;
    }
    console.log(numero);
}