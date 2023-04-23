let inputEl = document.getElementById("inp")
let number = document.getElementById("calc").innerHTML
let resultEl = document.getElementById("result")
let equation = ""
function writer(value) {
    let numberStr = value 
    inputEl.textContent += numberStr
    equation = inputEl.textContent
    console.log(equation)
}

function eraser() {
    inputEl.textContent = ""
    resultEl.textContent = ""
}

function calculate() {
    resultEl.textContent = eval(equation)
}
let genEl = document.getElementById("oshey")
function updater() {
  var element = document.getElementById("main");
  element.classList.toggle("dark-mode");
}
