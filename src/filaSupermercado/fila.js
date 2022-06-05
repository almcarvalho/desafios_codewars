//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

//video que ajuda a entender o problema e uma solução em java
//https://www.youtube.com/watch?v=h9Gu97aLafA&t=305s

function queueTime(customers, n) {
    //CASO DE APENAS 1 CAIXA:
    if (n == 1) {
        let soma = 0;
        for (let index = 0; index < customers.length; index++) {
            const element = customers[index];
            // console.log(element);
            soma = soma + element;
        }
        //console.log(soma);
        return soma / n;
    } else {
        let till = new Array(n);
        for (let index = 0; index < till.length; index++) {
            till[index] = 0;
            console.log(till[index]);
        }
        while (customers.length > 0) {
            //menor tempo de um caixa (till)
            let menor = Math.min(...till);
            console.log('menor' + menor);
            let atendido = customers.shift();
            console.log('atendido' + atendido);
            till[till.indexOf(menor)] = till[till.indexOf(menor)] + atendido;
        }
        //exibir resultado dos caixas
        for (let index = 0; index < till.length; index++) {
            const element = till[index];
            console.log('caixa: ' + index + ':' + element);
        }
        //pegar o maior tempo dos caixas e retornar:
        return (Math.max(...till));
    }
}

//var clientes = [5, 3, 4];
clientes = [1, 2, 3, 4, 5]; //9 
console.log(queueTime(clientes, 2));

