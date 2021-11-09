const form = document.getElementById('formElem');

form.onsubmit = async (event) => {
    event.preventDefault();
    let submit = await fetch('https://fe-student-api.herokuapp.com/api/file', {
        method: 'POST',
        body: new FormData(form)
    })
    let result = await submit.json();

    console.log(result.message);
}