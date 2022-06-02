//bope challenge array []

function magNumber(info) {
    if (info[0] == 'PT92') {
        return Math.ceil((info[1] * 3) / 17);
    }
    if (info[0] == 'M4A1') {
        return Math.ceil(info[1] * 3 / 30);
    }
    if (info[0] == 'M16A2') {
        return Math.ceil(info[1] * 3 / 30);
    }
    if (info[0] == 'PSG1') {
        return Math.ceil(info[1] * 3 / 5);
    }
}

//console.log('resultado ' + magNumber('PSG1', 31));
var info = ['PT92', 6];
console.log('resultado ' + magNumber(info));


