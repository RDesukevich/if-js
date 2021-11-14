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