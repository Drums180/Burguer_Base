// buttons const
const increaseBtns = document.querySelectorAll(".increaseBtn");
const decreaseBtns = document.querySelectorAll(".decreaseBtn");
const quantities = document.querySelectorAll(".quantity");

// Event listener to increase/decrease orders
increaseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    quantities[index].innerText = parseInt(quantities[index].innerText) + 1;
  });
});
a
decreaseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (parseInt(quantities[index].innerText) > 0) {
      quantities[index].innerText = parseInt(quantities[index].innerText) - 1;
    }
  });
});

// Event listener for submit btn
const submitBtn = document.querySelector("button[type='submit']");
submitBtn.addEventListener("click", () => {
  // Code will be written below
});
