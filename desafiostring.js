//comparação de strings

function solution(str, ending) {
    return ((str.slice((str.length - ending.length), str.length) == ending))
}

console.log(compareStrings('abcde', 'cde'));

//console.log('o retorno da função foi:' + compareStrings('texto','to'))