let app = document.querySelector('.head');

document.querySelector('.btn1').addEventListener('click', function () {
    let search = `search=${document.getElementById('search').value}&`;
    let adults = `adults=${document.getElementById('adults').value}&`;
    let children = `children=${document.getElementById('children').value}&`;
    let rooms = `rooms=${document.getElementById('rooms').value}`;
    let url = `https://fe-student-api.herokuapp.com/api/hotels?${search}${adults}${children}${rooms}`
    fetch(url).then(
        (response) =>
            response.json().then((json) => {
                searchHotel(json);
            })
    );
})

function searchHotel(arr) {
    const lastChild = app.lastChild;
    if (lastChild.nodeName !== "H2") {
        lastChild.remove();
    }
    let div = document.createElement('div');
    app.appendChild(div);
    arr.forEach((item) => {
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let figcaption = document.createElement('figcaption');

        div.className = 'items';
        figure.className = 'homes-guests-loves__col';
        img.src = item.imageUrl;
        img.className = 'homes-guests-loves__img-wrap';
        p.innerHTML = item.city + ', ' + item.country;
        p.className = 'homes-guest-loves__place';
        figcaption.innerHTML = item.name;
        figcaption.className = 'homes-guest-loves__text';
        div.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        figure.appendChild(p);
    })
}