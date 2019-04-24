function Set(){
    var array = [];
    this.add = function(valor){
        if(array.indexOf(valor)=== -1){
            array.push(valor);
        }
    },
    this.mostravalores = function(){
        console.log(array);
    }
}

var set = new Set();
set.add(2);
set.add(4);
set.add(6);
set.add(2);
set.add(2);

set.mostravalores();

// [ 2, 4, 6 ]