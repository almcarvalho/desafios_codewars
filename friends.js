//https://www.codewars.com/kata/55b42574ff091733d900002f/javascript

function friend(friends) {
    //novo array para o resultado
    let resultado = new Array();
    for (let index = 0; index < friends.length; index++) {
        const element = friends[index];
        if (element.length === 4) { //pegando os amigos que tem o tamanho 4
            resultado.push(element);
        }
    }
    return resultado;
}

console.log(friend(["Maria", "José", "João", "T"]));
//FEITO! :)

