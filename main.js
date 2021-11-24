function sum(x) {
    function sum1(y) {
        return x + y;
    }
    return sum1;
}

console.log(sum(2)(5));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const changeTextColor = () => {
    let i = 0;

    return function (event) {
        event.target.style.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
    }
}

const changeColor1 = changeTextColor();
const changeColor2 = changeTextColor();
const changeColor3 = changeTextColor();

text1.addEventListener('click', changeColor1);
text2.addEventListener('click', changeColor2);
text3.addEventListener('click', changeColor3);

let user = "John Doe";
console.log(user);
let student = "Roman";
user=student;
//В переменной user находится значение переменной student
console.log(user);

let test = 1;
test++;
//В переменной test=2

console.log(test);
test--;
//В переменной test=1
console.log(test);
//test = true
console.log(Boolean(test));

const arr = [2, 3, 5, 8];
let p = 1;
for (let i = 0; i < 4; i++) {
    p *= arr[i];
}
console.log(p);

const arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < 8; i++) {
    if (arr1[i] > 5 && arr1[i] < 10) {
        console.log(arr1[i]);
    }
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}