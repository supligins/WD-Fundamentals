
let myVar = "Hello World!";
document.getElementById("variable").innerText = myVar;

function showInput() {
    let input = document.getElementById("userInput").value;
    document.getElementById("output").innerText = "You entered: " + input;
}

function checkCondition() {
    let number = Math.floor(Math.random() * 100);
    if (number > 69) {
        document.getElementById("condition").innerText = number + " is greater than 69";
    } else if (number == 69) {
        document.getElementById("condition").innerText = number + " is equal to 69";
    } else {
        document.getElementById("condition").innerText = number + " is less than 69";
    }
}

function showLoop() {
    let list = document.getElementById("loop");
    list.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = "Snail " + i;
        list.appendChild(listItem);
    }
}
