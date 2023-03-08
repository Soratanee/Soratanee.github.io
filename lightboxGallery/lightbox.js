let lightboxContainer = 
    document.getElementById("lightboxContainer");
let lightboxBackground =
    document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = 
    document.getElementById("lightboxCloser");

function openLightbox() {
    lightbocCenter.classList.add("display");
    lightbox.src = this.src;
}
// let coffeeImage = document.getElementById("coffeeImage");
//coffeeImage.onclick = openLightbox; 
// let coffeeImage = document.getElementById("coffeeImage");
//coffeeImage.onclick = openLightbox; 
// let coffeeImage = document.getElementById("coffeeImage");
//coffeeImage.onclick = openLightbox; 
// let coffeeImage = document.getElementById("coffeeImage");
//coffeeImage.onclick = openLightbox; 

let galleryImages = document.getElementsByClassName("galleryImages");
for(let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;


let closers = document.getElementsByClassName('closer');
for (let i = 0; i < closer.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}
