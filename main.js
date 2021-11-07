
if ('Непонял как проверить есть ли у меня данные') {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular").then(
        (response) =>
            response.json().then((json) => {
                sessionStorage.setItem('GET', JSON.stringify(json));
            })
    );
}
else {
    console.log(sessionStorage.getItem('GET'));
}

