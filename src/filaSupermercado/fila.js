function queueTime(customers, n) {
    //TODODFLKDFJLK
    let soma = 0;
    for (let index = 0; index < customers.length; index++) {
        const element = customers[index];
        // console.log(element);
        soma = soma + element;
    }
    //console.log(soma);
    return soma / n;
}

var clientes = [2, 2, 3, 3, 4, 4];
console.log(queueTime(clientes, 2));

/*
describe("example tests", function() {
Test.assertEquals(queueTime([], 1), 0);
Test.assertEquals(queueTime([1,2,3,4], 1), 10);
Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);
*/