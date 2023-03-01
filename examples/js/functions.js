// variable review
let greeting = "Good evening"
console.log(greeting);

// Simple Function
function greet() {
    console.log(greeting);
}

greet();

// Function with an input parameter
function greetUser(username) {
    let userGreeting = greeting + username;
    console.log(userGreeting);
}

greetUser("EricaChristin");
greetUser("Jamir")
greetUser("Landon")

// Function with input parameter
// that modifies the page
function greetUserOnPage(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = greeting + " , " + username;


    // greetingDisplay.innerHTML =
    //  greetingDisplay.innerHTML +
    //  greeting +
    // ", " +
    //  username;
}

greetUserOnPage("EricaChristin");
console.log(
    getUseGreeting("EricaChristin")
);

// Function using another function
// that modifies the page
function greetUserOnPageV2(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = getUserGreeting(username);
}

greetUserOnPageV2("EricaChristin Osorio");