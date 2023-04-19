let inputEl = document.getElementById("inp")
let number = document.getElementById("calc").innerHTML
let equation = ""
function writer(value) {
    let numberStr = value 
    inputEl.textContent += numberStr
    equation = inputEl.textContent
    console.log(equation)
}

function eraser() {
    inputEl.textContent = ""
}

function calculate() {
    inputEl.textContent = eval(equation)
}