
const filter = document.querySelector('.filter');
const div = document.createElement('div');
const p = document.createElement('p');

let countAdults = document.querySelector('.count-adults');
let countChildren = document.querySelector('.count-children');
let countRoom = document.querySelector('.count-rooms');

let filter = document.querySelector('.filter');
let div = document.createElement('div');
let p = document.createElement('p');
let select = document.createElement('select');


div.className = 'age-selection';
div.id = 'age-selection';
filter.append(div);
p.className = 'filter-subtitle'
p.innerHTML = 'What is the age of the child you’re travelling with?';

select.className = 'children-years-old';

document.querySelector('.col--guests').addEventListener('click', function (){
    document.getElementById("form-filter").style.display = 'flex';
})

let adults = 0;
let children = 0;
let room = 0;
let countAdults = document.querySelector('.count-adults');
let countChildren = document.querySelector('.count-children');
let countRoom = document.querySelector('.count-rooms');


document.querySelector('.btn-augment-adults').addEventListener('click', function () {
    let btn = document.querySelector('.btn-augment-adults');
    if (countAdults.innerHTML < 30) {
        adults++
        countAdults.innerHTML = adults.toString();
        document.querySelector('.col--guests').value = adults + ' Adults ' + children + ' Children ' + room + ' Room';
        document.querySelector('.col--guests').value = `${adults} Adults ${children} Children ${room} Rooms`;
    } else {
        btn.setAttribute('disable','disable');
    }
    btn.setAttribute('disable', 'false')
})

document.querySelector('.btn-subtract-adults').addEventListener('click', function () {
    let btn = document.querySelector('.btn-subtract-adults')
    if (countAdults.innerHTML > 0) {
        adults--
        countAdults.innerHTML = adults.toString();
        document.querySelector('.col--guests').value = adults + ' Adults ' + children + ' Children ' + room + ' Room';
        document.querySelector('.col--guests').value = `${adults} Adults ${children} Children ${room} Rooms`;
    } else {
        btn.setAttribute('disable','disable');
    }
    btn.setAttribute('disable', 'false')
})

document.querySelector('.btn-augment-children').addEventListener('click', function () {
    let btn = document.querySelector('.btn-augment-children')
    if (countChildren.innerHTML < 10) {
        children++
        countChildren.innerHTML = children.toString();
        document.querySelector('.col--guests').value = adults + ' Adults ' + children + ' Children ' + room + ' Room';
        const select = document.createElement('select');
        select.className = 'children-years-old';
        for (let i = 1; i < 18; i++) {
            let option = document.createElement('option');
            option.innerHTML = i + ' years old'
        document.querySelector('.col--guests').value = `${adults} Adults ${children} Children ${room} Rooms`;
        const select = document.createElement('select');
        select.id = 'select-filter';
        select.className = 'children-years-old';
        for (let i = 1; i < 18; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.innerHTML = i + ' years old';
            option.className = 'count-years';
            select.append(option);
        }
        div.appendChild(select)
    } else btn.setAttribute('disable','disable');
    btn.setAttribute('disable', 'false');
    div.prepend(p);
})

document.querySelector('.btn-subtract-children').addEventListener('click', function () {
    let btn = document.querySelector('.btn-subtract-children')
    if (countChildren.innerHTML > 0) {
        children--
        countChildren.innerHTML = children.toString();
        document.querySelector('.col--guests').value = adults + ' Adults ' + children + ' Children ' + room + ' Room';
        document.querySelector('.col--guests').value = `${adults} Adults ${children} Children ${room} Rooms`;
        const select = document.querySelector('.children-years-old');
        div.removeChild(select)
    } else {
        btn.setAttribute('disable','disable');
    }
    btn.setAttribute('disable', 'false')
    if (countChildren.innerHTML < 1) {
        div.removeChild(p);
    }
})

document.querySelector('.btn-augment-room').addEventListener('click', function () {
    let btn = document.querySelector('.btn-augment-room')
    if (countRoom.innerHTML < 30) {
        room++
        countRoom.innerHTML = room.toString();
        document.querySelector('.col--guests').value = adults + ' Adults ' + children + ' Children ' + room + ' Room';
        document.querySelector('.col--guests').value = `${adults} Adults ${children} Children ${room} Rooms`;
    } else {
        btn.setAttribute('disable','disable');
    }
    btn.setAttribute('disable', 'false')
})

document.querySelector('.btn-subtract-room').addEventListener('click', function () {
    let btn = document.querySelector('.btn-subtract-room')
    if (countRoom.innerHTML > 0) {
        room--;
        countRoom.innerHTML = room.toString();
        document.querySelector('.col--guests').value = adults + ' Adults ' + children + ' Children ' + room + ' Room';
        document.querySelector('.col--guests').value = `${adults} Adults ${children} Children ${room} Rooms`;
    } else {
        btn.setAttribute('disable','disable');
    }
    btn.setAttribute('disable', 'false')
})

const availableHotels = document.querySelector('.available-hotels');
const availableHotelsContainer = document.querySelector('.container--available-hotels');

document.querySelector('.buttonSearch').addEventListener('click', function () {
    let option = [];
    let select = document.getElementsByClassName('children-years-old');
    for (let i = 0; select[i]; i++) {
        select[i].value && option.push(select[i].value);
    }
    let search = `search=${document.getElementById('search').value}&`;
    let adults = `adults=${countAdults.innerHTML}&`;
    let rooms = `rooms=${countRoom.innerHTML}`;
    let url = `https://fe-student-api.herokuapp.com/api/hotels?${search}${adults}children=${option}&${rooms}`;
    fetch(url).then(
        (response) =>
            response.json().then((json) => {
                const lastChild = availableHotelsContainer.lastChild;
                if (lastChild.nodeName !== "H2") {
                    lastChild.remove();
                }
                if (availableHotels.style.display === 'none') {
                    availableHotels.style.display = 'block';
                    let article = document.createElement('article');
                    article.className = 'available-hotels_row slider-line available-hotels-slider-line'
                    availableHotelsContainer.appendChild(article);
                    json.forEach((item) => {
                        const div = document.createElement('div');
                        const imgHotels = document.createElement('img');
                        const p = document.createElement('p');
                        const span = document.createElement('span');
                        div.className = 'available-hotels__col';
                        imgHotels.src = item.imageUrl;
                        imgHotels.className = 'available-hotels__img-wrap';
                        p.innerHTML = `${item.city}, ${item.country}`;
                        p.className = 'available-hotels__place';
                        span.innerHTML = item.name;
                        span.className = 'available-hotels__text';
                        article.append(div);
                        div.append(imgHotels);
                        div.append(span);
                        div.append(p);
                    })
                } else {
                    let article = document.createElement('article');
                    article.className = 'available-hotels_row slider-line'
                    availableHotelsContainer.appendChild(article);
                    json.forEach((item) => {
                        const div = document.createElement('div');
                        const imgHotels = document.createElement('img');
                        const p = document.createElement('p');
                        const span = document.createElement('span');
                        div.className = 'available-hotels__col';
                        imgHotels.src = item.imageUrl;
                        imgHotels.className = 'available-hotels__img-wrap';
                        p.innerHTML = `${item.city}, ${item.country}`;
                        p.className = 'available-hotels__place';
                        span.innerHTML = item.name;
                        span.className = 'available-hotels__text';
                        article.append(div);
                        div.append(imgHotels);
                        div.append(span);
                        div.append(p);
                    })
                }
            })
    );
})

const colors = {
    data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.current === undefined || this.current === this.data.length) {
            this.current = 0;
        }
        return {
            value: this.data[this.current++],
        };
    },
};

const element1 = document.getElementById("text1");
const element2 = document.getElementById("text2");
const element3 = document.getElementById("text3");

const changeStyle = (id) => (event) => {
    event.target.style.color = id.next().value;
};

const pBlock = [element1, element2, element3];
for (let i = 0; i < pBlock.length; i++) {
    pBlock[i].addEventListener("click", changeStyle(Object.assign({}, colors)));

const form = document.getElementById("form");
const img = document.getElementById("img");
const file = document.getElementById("file");


file.addEventListener("change", (event) => {
    event.preventDefault();
    const files = file.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
        const imgUrl = reader.result;
        img.style.backgroundImage = `url("${imgUrl}")`;
        img.innerHTML = "";
    };
});

async function fileUpload(event) {
    event.preventDefault();
    const response = await fetch(
        "https://fe-student-api.herokuapp.com/api/file",
        {
            method: "POST",
            body: new FormData(form),
        }
    );
    const result = await response.json();
    if (response.ok) {
        console.log(result);
    } else console.log(result.message);
}

form.onsubmit = fileUpload;
if (sessionStorage.getItem('hotels')) {
    JSON.parse(sessionStorage.getItem('hotels')).forEach((item => {
        const img = document.createElement('img');
        img.src = item.imageUrl;
        document.body.append(img);
    }))
}
else {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular").then(
        (response) =>
            response.json().then((json) => {
                json.forEach((item => {
                    const img = document.createElement('img');
                    img.src = item.imageUrl;
                    document.body.append(img);
                }))
                sessionStorage.setItem('hotels', JSON.stringify(json));
            })
    );
}

let app = document.querySelector('.homes-guests-loves_row');
fetch("https://fe-student-api.herokuapp.com/api/hotels/popular").then(
    (response) =>
        response.json().then((json) => {
            json.forEach((item) => {
                let figure = document.createElement('figure');
                let img = document.createElement('img');
                let p = document.createElement('p');
                let figcaption = document.createElement('figcaption');
                figure.className = 'homes-guests-loves__col';
                img.src = item.imageUrl;
                img.className = 'homes-guests-loves__img-wrap';
                p.innerHTML = item.city + ', ' + item.country;
                p.className = 'homes-guest-loves__place';
                figcaption.innerHTML = item.name;
                figcaption.className = 'homes-guest-loves__text';
                app.appendChild(figure);
                figure.append(img);
                figure.append(figcaption);
                figure.append(p);
            })
        })
);
const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class User {
    constructor(firstName, lastName, fullName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
}


class Student extends User {
    constructor({firstName, lastName, fullName, admissionYear, courseName, course}) {
        super(firstName, lastName, fullName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
        this.course = new Date().getFullYear() + -  + admissionYear;
    }
}


class Students {
    constructor(studentsArray){
        this.students = studentsArray.map(
            (student)=>{
                return new Student ({
                    firstName:student.firstName,
                    lastName: student.lastName,
                    admissionYear: student.admissionYear,
                    courseName: student.courseName
                })
            })
    }

    getInfo() {
        this.students.sort((a, b) => a.course - b.course);
        console.log(
            this.students.map(
                (item) => `${item.fullName} -  ${item.courseName}, ${item.course} курс `
            )
        );
    }
}

const students = new Students(studentsData);
students.getInfo();
const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

function deepEqual(object1, object2){
    if (object1 === object2) {
        return true;
    }
    else {
        if (Object.keys(object1).length !== Object.keys(object2).length) {
            return false;
        }
        for (const prop in object1) {

            if (!object2.hasOwnProperty(prop)) {
                return false;
            }
            if (object1[prop].valueOf() !== object2[prop].valueOf()) {
                if (! deepEqual(object1[prop], object2[prop])) {
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

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

const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
]


const app = document.querySelector('.homes-guests-loves_row')
data.reduce((acc, item) => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const figcaption = document.createElement('figcaption');
    figure.className = 'homes-guests-loves__col';
    img.src = item.imageUrl;
    img.className = 'homes-guests-loves__img-wrap';
    p.innerHTML = `${item.city}, ${item.country}`;
    p.className = 'homes-guest-loves__place';
    figcaption.innerHTML = item.name;
    figcaption.className = 'homes-guest-loves__text';
    app.appendChild(figure);
    figure.append(img);
    figure.append(figcaption);
    figure.append(p);
})

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.homes-guests-loves__slider').addEventListener('click', function (){
    offset += 311;
    if (offset > 933) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
});
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];

function palidrome(s) {
    return s === s.split("").reverse().join("");
}

console.log(palidrome('шалаш'));

const searchValue = prompt("Enter what you are looking for").toLowerCase().trim();
const res = data.filter(item =>
    Object.values(item).some(value =>
        value.toLowerCase().trim().includes(searchValue)
    )
)
console.log(res);


const allCountry = hotels.reduce((acc, item) => {
    const res = {... acc};
    if (!res[item.country]) {
        res[item.country] = [];
    }

    if (!res[item.country].includes(item.city)) {
        res[item.country].push(item.city);
    }

    return res;
});
console.log(allCountry);

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