var alunos = [
    {nome:'José', idade:15},
    {nome:'Maria', idade:3},
    {nome:'luciana', idade:44},
    {nome:'lucimara', idade:22}
];

/*
var alunosDeMaior = [];
for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];
    if(aluno.idade >= 18){
        alunosDeMaior.push(aluno);
    }
}
console.log(alunosDeMaior);
*/

var alunosDeMaior = alunos.filter(function (aluno) {
    return aluno.idade < 18;
});
console.log(alunosDeMaior);