# Entendendo o ECMAScript 6

https://www.udemy.com/entendendo-o-ecmascript-6/learn/v4/content

---

## <a name="indice">Índice</a>

- [Introdução](#parte1)   
- [Ferramentas](#parte2)   
- [Métodos Auxiliares](#parte3)   
- [Iteradores e Iteráveis](#parte4)   
- [For...of](#parte5)   
- [Novas estruturas de dados](#parte6)   
- [Const e Let](#parte7)   
- [Template Strings](#parte8)   
- [Arrow Functions](#parte9)   
- [Melhorias em objetos literais](#parte10)   
- [Valores Padrões](#parte11)   
- [Operadores Rest e Spread](#parte12)   
- [Desestruturamento](#parte13)   
- [Classes](#parte14)   
- [Módulos](#parte15)   
- [Funções Geradoras](#parte16)   
- [Promises](#parte17)   
- [Conclusão](#parte18)   


---

## <a name="parte1">Introdução</a>

- https://medium.com/code-prestige
- https://www.youtube.com/channel/UC-7TVZ9yNWzWA4iRW5umbjw

Os exercícios práticos estão disponíveis no GitHub.:  
- https://github.com/DiegoPinho/entendendo-es6

[Voltar ao Índice](#indice)

---

## <a name="parte2">Ferramentas</a>

ECMAScript x JavaScript

O ECMAScript (ES) é a especificação da linguagem de script que o JavaScript implementa. Isto é, a descrição de uma linguagem de script, sendo padronizado pela Ecma International — associação criada em 1961 dedicada à padronização de sistemas de informação e comunicação — na especificação ECMA-262. 

A especificação é definida pelo ECMA Technical Comittee 39 (TC39), comitê formado por especialistas de grandes companhias da área de tecnologia, tais como: Apple, Google, Microsoft e Mozilla. Este comitê se reúne a cada dois meses, normalmente na Califórnia, para discutir o futuro da especificação. As datas das reuniões, assim como trechos delas, também estão disponíveis online no site oficial. 

O ECMAScript é suportado por uma diversidade de aplicações, principalmente navegadores, em que são implementados pela linguagem JavaScript. Muitas das implementações adicionam extensões específicas a linguagem, como é o caso do JScript da Microsoft. Isso significa que aplicações escritas em uma implementação podem ser incompatíveis com outras. É sempre preciso estar atento a isto.

A partir da versão ES6, será adotado o versionamento por ano e não mais por número. É por isso que em muitos lugares encontramos o ES6 como ECMA2015 ou ES2015. São a mesma coisa. Esta nova atitude se deve ao fato da pretensão de termos uma nova atualização da especificação a cada ano.

Babel

Além do compilador online do Babel, existem outras excelentes ferramentas gratuitas disponíveis na internet que podem ser usadas livremente para acompanhar e testar os códigos que serão apresentados neste cruso. A única exceção é a do capítulo Módulos, pois nele é necessário dividir o código em vários arquivos para ver os efeitos da modularização.

Algumas outras ferramentas gratuitas e online são:

- repl.it
- JS Bin
- ES6 Fiddle
- ES6 Console


Referências:

Site Oficial da ECMA Internacional - http://www.ecmascript.org/index.php
Especificação ES6 - http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
ECMA Compatibility Table - https://kangax.github.io/compat-table/es6/
Repositório do TC39 no GitHub - https://github.com/tc39/ecma262
Site Oficial do Babel - https://babeljs.io/

[Voltar ao Índice](#indice)

---

## <a name="parte3">Métodos Auxiliares</a>

### 1. O método tradicional

```ecmascript 6
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ECMAScript 6</title>
</head>
<body>
    <script>
        var frutas = ["abacaxi", "maça", "uva"];
        for(var i = 0; i < frutas.length ; i++){
            console.log(frutas[i]);
        }
    </script>
</body>
</html>
```

O maior problema com esta abordagem é que é impossível saber qual o objetivo do corpo da iteração sem ver sua implementação.

Os métodos auxiliares nos permite iterar um array de forma muito mais clara e simples. Neste capítulo, vimos 5 delas: forEach, map, filter, find, every, some e o reduce. Apesar de terem uma sintaxe muito parecida, cada um tem uma função bem específica. Abaixo, segue um exemplo de como utilizá-las:

#### 2. forEach

```ecmascript 6
var nomes = ['maria', 'josé', 'luciana'];
for(var i = 0; i < nomes.length ; i++){
    console.log(nomes[i]);
}

console.log('------------------');

nomes.forEach(function (nome) {
   console.log(nome);
});

```

Repare no que aconteceu. Dentro do forEach , passamos uma função anônima de retorno, que costumamos chamar de função de callback . Ela é executada para cada elemento dentro da lista. A cada iteração, o valor da lista é atribuído à variável passada como parâmetro no callback — no nosso caso, a variável nome.

Entretanto, note que a função de callback não precisa necessariamente ser anônima. Podemos defini-la antes e atribuí-la a uma variável para passá-la como parâmetro ao forEach :

```ecmascript 6
var nomes = ['maria', 'josé', 'luciana'];
function imprimeNome(nome){
    console.log(nome);
}
nomes.forEach(imprimeNome);

```

Isso acontece exatamente porque os elementos processados pelo forEach são determinados antes da primeira invocação da função de callback . Entretanto, isso não quer dizer que os valores não foram adicionados à lista. Ao adicionar um segundo console.log ao final do código para exibir a lista, notamos que a RedeTV foi adicionada várias vezes ao nosso Array . Uma cópia para cada iteração:

```ecmascript 6
var canais = ['globo','sbt', 'record'];

canais.forEach(function (canal) {
    console.log(canal);
    canais.push('REDE TV'); //este item será ignorado
});
console.log(canais);

```

Utilizamos para quando precisamos passar por todos os nossos itens de um Array. 

Exemplo: exibir todos os seus itens no console.

```ecmascript 6
var numeros = [1,2,3,4,5];
numeros.forEach(function(numero){
    console.log(numero);
});
// saída
// 1
// 2
// 3
// 4
// 5
```


#### 3. map

O método map é muito útil quando precisamos não somente passar por todos os elementos de um Array , mas também modificá-los.

```javascript
var numeros = [1,2,3];
var dobro = [];

numeros.forEach(function (numero) {
    dobro.push(numero * 2);
});

console.log(dobro);
```

```ecmascript 6
var numeros = [1,2,3];

var dobro = numeros.map(function (numero) {
    return numero * 2;
});

console.log(dobro);
console.log(numeros);

```

O map executa a função de callback recebida por parâmetro para cada elemento iterado de numeros e constrói um novo Array com base nos retornos de cada uma das chamadas. Como o map nos devolve uma outra instância de Array , a lista original nunca é realmente modificada, o que mantém sua integridade.



#### 4. filter

Como o próprio nome já pode induzir, este método é deve ser utilizado quando temos a necessidade de filtrar nossa lista de acordo com algum critério.

```ecmascript 6
var alunos = [
    {nome:'José', idade:15},
    {nome:'Maria', idade:3},
    {nome:'luciana', idade:44},
    {nome:'lucimara', idade:22}
];

var alunosDeMaior = [];
for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];
    if(aluno.idade >= 18){
        alunosDeMaior.push(aluno);
    }
}
console.log(alunosDeMaior);
```

A função de callback recebe como parâmetro cada um dos alunos da lista em cada iteração — assim como aconteceu nas outras funções auxiliares que vimos — e o atribui na variável aluno .

Dentro da função, utilizamos um critério de avaliação para devolver um valor booleano para o filter : true ou false . Se for retornado verdadeiro, o valor é inserido no novo Array retornado; caso contrário, é simplesmente ignorado e não é incluído.

```ecmascript 6
var alunos = [
    {nome:'José', idade:15},
    {nome:'Maria', idade:3},
    {nome:'luciana', idade:44},
    {nome:'lucimara', idade:22}
];

var alunosDeMaior = alunos.filter(function (aluno) {
    return aluno.idade < 18;
});
console.log(alunosDeMaior);
```

#### 5. find

Esta função auxiliar é particularmente interessante quando o objetivo é encontrar um item específico dentro de um Array.

```javascript
var alunos = [
    {nome:'Jose', idade:34},
    {nome:'Joao', idade:31},
    {nome:'Josemar', idade:44},
    {nome:'Maria', idade:11},
];

var alunoProcurado;
for(var i = 0; i < alunos.length ; i++){
    var aluno = alunos[i];
    if(aluno.nome === "Maria"){
        alunoProcurado = aluno;
        break;
    }
}

console.log(alunoProcurado);
```

```ecmascript 6
var alunos = [
    {nome:'Jose', idade:34},
    {nome:'Joao', idade:31},
    {nome:'Josemar', idade:44},
    {nome:'Maria', idade:11},
];

var alunoProducado = alunos.find(function (aluno) {
   //return aluno.nome === "Maria";
    return aluno.idade >= 15; // retorna apenas 1 resultado
});

console.log(alunoProducado);
```


#### 6. every

#### 7. some

#### 8. reduce - parte 1

#### 9. reduce - parte 2

#### 10. Conclusão





[Voltar ao Índice](#indice)

---

## <a name="parte4">Iteradores e Iteráveis</a>


[Voltar ao Índice](#indice)

---

## <a name="parte5">For...of</a>


[Voltar ao Índice](#indice)

---

## <a name="parte6">Novas estruturas de dados</a>


[Voltar ao Índice](#indice)

---

## <a name="parte7">Const e Let</a>


[Voltar ao Índice](#indice)

---

## <a name="parte8">Template Strings</a>


[Voltar ao Índice](#indice)

---

## <a name="parte9">Arrow Functions</a>


[Voltar ao Índice](#indice)

---

## <a name="parte10">Melhorias em objetos literais</a>


[Voltar ao Índice](#indice)

---

## <a name="parte11">Valores Padrões</a>


[Voltar ao Índice](#indice)

---

## <a name="parte12">Operadores Rest e Spread</a>


[Voltar ao Índice](#indice)

---

## <a name="parte13">Desestruturamento</a>


[Voltar ao Índice](#indice)

---

## <a name="parte14">Classes</a>


[Voltar ao Índice](#indice)

---

## <a name="parte15">Módulos</a>


[Voltar ao Índice](#indice)

---

## <a name="parte16">Funções Geradoras</a>


[Voltar ao Índice](#indice)

---

## <a name="parte17">Promises</a>


[Voltar ao Índice](#indice)

---

## <a name="parte18">Conclusão</a>


[Voltar ao Índice](#indice)

---