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


let app = document.querySelector('.homes-guests-loves_row')
data.reduce((acc, item) => {
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let figcaption = document.createElement('figcaption');
    figure.className = 'homes-guests-loves__col';
    img.src = item.imageUrl;
    img.className = 'homes-guests-loves__img-wrap';
    p.innerHTML = item.city + ',' + item.country;
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