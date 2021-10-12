var stop = false, age = 16;

age > 18 ? location.assign("continue.html") : stop = true;


function palidrome(h) {
    let res=0
    let schet = h.length - 1
    for (let i = 0; i < h.length; i++) {
        if (h[i] === h[schet]) {}
        else res++;
        schet--;
    }
    return (res === 0) ? 'Palidrome' : 'Don\'t palidrome';
}

console.log(palidrome('шалаш'))

function min(a,b) {
    if (a < b) {
        return a;
    } else return b;
}

console.log(min(8,7))

function max(a,b) {
    if (a > b) {
        return a;
    } else return b;
}

console.log(max(8,7))

const arr3 = [];
for (let i = 0; i < 10; i++) {
    arr3[i] = Math.floor(Math.random() * 101);
}
console.log(arr3);

function zero() {
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] % 10 === 0) {
            arr3[i] = (arr3[i]/10 + 'zero');
        }
        if (arr3[i] === 0) {
            arr3[i] = '0';
        }
    }
    return arr3;
}

console.log(zero())