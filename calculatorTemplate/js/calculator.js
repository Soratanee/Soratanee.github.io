let result = document.getElementById("result");

function displayTwoPlusTwo() {
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2;
}

function displayThreeTimesFour() {
    result.innerHTML = 3 * 4;
}

function displaySixPlusSix() {
    result.innerHTML = 6 + 6;
}

function displayMultiply() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value * input2.value;
}

function displayAddition() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = 
    parseInt(input1.value) + parseInt(input2.value);
}

let myNumber = 54;
let myStringNumber = myNumber.toString();

console.log(myNumber);
console.log(myStringNumber);