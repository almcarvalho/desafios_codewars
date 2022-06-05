//pegando o menor x pegando a posição do menor
let array = [1, 2, 3];
//pega o indice do menor:
console.log('indice do menor:');
console.log(array.indexOf(Math.min(...array)));

//pega o menor
console.log('menor elemento:');
console.log(Math.min(...array));


let till = [1, 2, 3];


for (let index = 0; index < till.length; index++) {
    const element = till[index];
    console.log('item: ' + element);
}



till.forEach(currentItem => {
    console.log('item: ' + currentItem);
});


for (let item in till) {
    console.log('item: ' + item);
}