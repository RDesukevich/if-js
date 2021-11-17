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
