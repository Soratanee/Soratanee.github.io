const navButton = document.getElementById("nav-button");
const navArrow = document.getElementById("arrow");
const navDropdown = document.getElementById("dropdown");
const page = document.getElementById("page");

function toggleDropdown() {
    navDropdown.classList.toggle("reveal");
    navArrow.classList.toggle("arrow-flip");
}

navButton.addEventListener("click", function(e) {
    toggleDropdown();
});

page.addEventListener("click", function(e) {
    if (navDropdown.classList.contains("reveal")) {
        toggleDropdown();
    }
})