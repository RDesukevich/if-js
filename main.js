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
    } else {
        btn.setAttribute('disable','disable');
    }
    btn.setAttribute('disable', 'false')
    div.append(p);
    div.appendChild(select);
    for (let i = 1; i < 18; i++) {
        let option = document.createElement('option');
        option.innerHTML = i + ' years old'
        select.appendChild(option);
    }
})

document.querySelector('.btn-subtract-children').addEventListener('click', function () {
    let btn = document.querySelector('.btn-subtract-children')
    if (countChildren.innerHTML > 0) {
        children--
        countChildren.innerHTML = children.toString();
        document.querySelector('.col--guests').value = adults + ' Adults ' + children + ' Children ' + room + ' Room';
    } else {
        btn.setAttribute('disable','disable');
    }
    btn.setAttribute('disable', 'false')
    div.removeChild(select);
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