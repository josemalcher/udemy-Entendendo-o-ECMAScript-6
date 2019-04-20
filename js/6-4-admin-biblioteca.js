var livros = [
    {titulo: "O Poder do Habito", autor:"Charles D.", local: "A1"},
    {titulo: "O Poder da Mente", autor:"Charles D.", local: "G1"},
    {titulo: "Geração de Valor", autor:"Flavio A..", local: "B1"},
    {titulo: "Java Como Programar", autor:"Deitel", local: "P1"},
];

var estantes = new Map();

for(var livro of livros){
    estantes.set(livro.titulo, livro.local);
}

function getLocalizacaoDoLivro(titulo){
    var estante = estantes.get(titulo);
    if(estante === undefined){
        return "Livro não encontrado";
    }
     return estante;
}

var localizacao = getLocalizacaoDoLivro('Java aComo Programar');
console.log(localizacao);