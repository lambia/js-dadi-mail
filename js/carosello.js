//Inserisco le immagini nel DOM
imagesPath = [
    "https://picsum.photos/id/101/900/400",
    "https://picsum.photos/id/102/900/400",
    "https://picsum.photos/id/103/900/400"
];

let imagesHtml = "";
for (let i = 0; i < imagesPath.length; i++) {
    const imagePath = imagesPath[i];
    imagesHtml += `<img src="${imagePath}">`;
}
document.getElementById("carousel-wrapper").innerHTML = imagesHtml;

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

    // Versione alternativa con ciclo for
    // currentImg++;

    // for (let i = 0; i < images.length; i++) {
    //     const image = images[i];

    //     if (i == currentImg) {
    //         image.classList.add("active");
    //     } else {
    //         image.classList.remove("active");
    //     }
    // }
});

document.getElementById("prevBtn").addEventListener("click", function () {
    console.log("indietro");
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        currentImg--;
        images[currentImg].classList.add("active");
    }
});