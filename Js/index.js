alert("Welcome back \u{1F44B}!")
// writing a function to increase the count when the increment button is tapped
let incrementBtn = document.getElementById("increment-btn")
let countEl = document.getElementById("count-el")
let count = 0;
function increase() {
    count = count + 1
    countEl.textContent = count;
}

// writing a fucntion for the save button
let save = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

function funcSave() {
    saveEl.textContent = saveEl.textContent + count + " - " 
    countEl.textContent = 0;
    count = 0;
}
