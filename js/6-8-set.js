/* Músicas Disponíveis */

var musica_1 = {titulo:'Musica 1', autor: 'autor 1'};
var musica_2 = {titulo:'Musica 2', autor: 'autor 2'};
var musica_3 = {titulo:'Musica 3', autor: 'autor 3'};
var musica_4 = {titulo:'Musica 4', autor: 'autor 4'};

var playlist = new Set([musica_1,musica_2,musica_1,musica_3,musica_4,musica_1]);

/* Features */

// Adicionar música
//playlist.add(musica_1);
//playlist.add(musica_2);

// remover musica 
//playlist.delete(musica_1);

// remover todas as músicas
//playlist.clear();

//ver quantas musicas estão na playlist
console.log(playlist.size);

for(var musica of playlist){
    console.log(musica);
}

/* 

4
{ titulo: 'Musica 1', autor: 'autor 1' }
{ titulo: 'Musica 2', autor: 'autor 2' }
{ titulo: 'Musica 3', autor: 'autor 3' }
{ titulo: 'Musica 4', autor: 'autor 4' }

*/
