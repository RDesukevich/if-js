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

