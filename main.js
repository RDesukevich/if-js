const filter = document.querySelector('.filter');
const div = document.createElement('div');
const p = document.createElement('p');

let countAdults = document.querySelector('.count-adults');
let countChildren = document.querySelector('.count-children');
let countRoom = document.querySelector('.count-rooms');

div.className = 'age-selection';
div.id = 'age-selection';
filter.append(div);
p.className = 'filter-subtitle'
p.innerHTML = 'What is the age of the child you’re travelling with?';




document.querySelector('.col--guests').addEventListener('click', function (){
    document.getElementById("form-filter").style.display = 'flex';
})

let adults = 0;
let children = 0;
let room = 0;

document.querySelector('.btn-augment-adults').addEventListener('click', function () {
    let btn = document.querySelector('.btn-augment-adults');
    if (countAdults.innerHTML < 30) {
        adults++
        countAdults.innerHTML = adults.toString();
        document.querySelector('.col--guests').value = adults + ' Adults ' + children + ' Children ' + room + ' Room';
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
    } else {
        btn.setAttribute('disable','disable');
    }
    btn.setAttribute('disable', 'false')
})