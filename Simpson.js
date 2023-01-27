const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

const generateApi = document.getElementById("btn-generate");
const card = document.getElementById("card");
const img = document.getElementById("img-card");
const cardTitle = document.getElementById("titleH1");
const cardP = document.getElementById("p-card");
generateApi.addEventListener("click",getApi);

function getApi() {
        fetch(URL)
        .then(responce => responce.json())
        .then( data => {
            cardTitle.textContent = data[0].character
            img.src = data[0].image
            cardP.textContent = data[0].quote
        } )
}