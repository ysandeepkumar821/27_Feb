//getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const restBtn = document.getElementById("restbtn");
const displayValue = document.getElementById("displayValue");

// for decrementbutton click

decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert("Negative value not allowed");
    }
});

// for increment buttion click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value >=10) {
        alert("10 values are not allowed");
    } else {
        displayValue.innerText = value + 1;
    }
});


// for reset button click

resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});