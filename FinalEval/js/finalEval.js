let lightboxContainer = 
    document.getElementById("lightboxContainer");
let lightboxBackground =
    document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = 
    document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let galleryImages = document.getElementsByClassName("galleryImages");
for(let i = 0; i < galleryImages.length; i++) {
    let galleryImages = galleryImages[i];
    galleryImages.onclick = openLightbox;
}


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;


let closers = document.getElementsByClassName('closer');
for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}
