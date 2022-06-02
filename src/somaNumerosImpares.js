//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/javascript

function rowSumOddNumbers(n) {
    let contador = 1;
    let numbers = 1;
    let soma = 0;
    for (let index = 0; index < n; index++) {
        soma = 0;
        for (let index = 0; index < contador; index++) {
            //console.log(numbers);
            soma += numbers;
            numbers = numbers + 2;
        }
        contador++;
    }
    return soma;
}

console.log(rowSumOddNumbers(3));