//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending) {
    return ((str.slice((str.length - ending.length), str.length) == ending))
}

console.log(compareStrings('abcde', 'cde'));

//console.log('o retorno da função foi:' + compareStrings('texto','to'))