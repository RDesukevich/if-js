function TransformationDate(date) {
    date = date.split('-');
    let date1 = date[0];
    date[0] = date[2];
    date[2] = date1;
    return date.join('.');
}

console.log(TransformationDate('1993-01-28'));

const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const SearchInfo = searchItem => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].city === searchItem || data[i].country === searchItem || data[i].hotel === searchItem) {
            console.log(data[i]);
        }
    }
    return data;
}
console.log(SearchInfo('Germany'));

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