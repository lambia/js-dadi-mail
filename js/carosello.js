//Percorsi delle immagini che voglio inserire
imagesPath = [
    "https://picsum.photos/id/101/900/400",
    "https://picsum.photos/id/102/900/400",
    "https://picsum.photos/id/103/900/400"
];

//Inserisco le immagini nel DOM
let immaginiDaInserire = "";
for (let i = 0; i < imagesPath.length; i++) {
    const percorsoImmagine = imagesPath[i];
    immaginiDaInserire += `<img src="${percorsoImmagine}">`;
}
document.getElementById("carousel-wrapper").innerHTML = immaginiDaInserire;

//Imposto la prima immagine come attiva
let currentImg = 0;
const images = document.querySelectorAll("#carousel-wrapper img");
images[currentImg].classList.add("active");

//Gestisco i pulsanti
document.getElementById("nextBtn").addEventListener("click", function () {
    console.log("avanti");
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("active");
        currentImg++;
        images[currentImg].classList.add("active");
    }
});

document.getElementById("prevBtn").addEventListener("click", function () {
    console.log("indietro");
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        currentImg--;
        images[currentImg].classList.add("active");
    }
});

//Versione alternativa di "avanti", ma con ciclo for inutile
document.getElementById("altroNextBtn").addEventListener("click", function () {
    console.log("avanti");
    currentImg++;

    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        if (i == currentImg) {
            image.classList.add("active");
        } else {
            image.classList.remove("active");
        }
    }
});
