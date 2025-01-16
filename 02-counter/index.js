const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const counterDisplay = document.getElementById("counting");

let count = 0;
plusBtn.addEventListener("click", () => {
  count += 1;
  updateDisplay();
});

minusBtn.addEventListener("click", () => {
  if (count != 0) {
    count--;
  }

  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  counterDisplay.innerHTML = count;
}
