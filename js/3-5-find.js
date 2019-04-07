var alunos = [
    {nome:'Jose', idade:34},
    {nome:'Joao', idade:31},
    {nome:'Josemar', idade:44},
    {nome:'Maria', idade:11},
];

/*var alunoProcurado;
for(var i = 0; i < alunos.length ; i++){
    var aluno = alunos[i];
    if(aluno.nome === "Maria"){
        alunoProcurado = aluno;
        break;
    }
}*/

var alunoProducado = alunos.find(function (aluno) {
   //return aluno.nome === "Maria";
    return aluno.idade >= 15; // retorna apenas 1 resultado
});

console.log(alunoProducado);