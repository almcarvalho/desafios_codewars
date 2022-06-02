//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
    //converter um número para string
    let nome = num + '';
    let retorno = '';
    for (let index = 0; index < nome.length; index++) {
        const element = nome[index] * nome[index];
        retorno += element;
    }
    return Number(retorno);
}

//console.log(squareDigits(3212));

module.exports = squareDigits;