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

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.homes-guests-loves__slider').addEventListener('click', function (){
    offset += 311;
    if (offset > 933) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});