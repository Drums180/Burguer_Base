// buttons const
const increaseBtns = document.querySelectorAll(".increaseBtn");
const decreaseBtns = document.querySelectorAll(".decreaseBtn");
const quantities = document.querySelectorAll(".quantity");
const submitBtn = document.querySelector('form button');

async function fetchHamburgers() {
  const response = await fetch('/api/hamburgers');
  const hamburgers = await response.json();
  return hamburgers;
}

// Function to fetch the burger object from the burger routes
const getBurger = async (burgerName) => {
  try {
    const response = await fetch(`/api/hamburgers/${burgerName}`);
    if (!response.ok) {
      throw new Error('Failed to get burger');
    }
    const burger = await response.json();
    return burger;
  } catch (err) {
    console.error(err);
  }
};

// Function to know the total order of burgers into an array
const getBurgersOrdered = (hamburgers) => {
  const burgersOrdered = [];

  const burgerInputs = document.querySelectorAll("input[type='number']");
  burgerInputs.forEach((input, index) => {
    const numOrdered = parseInt(input.value);
    if (numOrdered) {
      burgersOrdered.push({ name: hamburgers[index].burger_name, quantity: numOrdered });
    }
  });

  console.log('burgersOrdered:', burgersOrdered);

  return burgersOrdered;
};

// Function to update the ingredient stock
const updateStock = async (burgerName, quantity) => {
  console.log('updateStock called', burgerName, quantity);

  // Get the burger object by its name
  const burgerObj = await getBurger(burgerName);

  // Accumulate the total usage for each ingredient in the burger
  const ingredients = {};
  for (const [ingredientName, ingredientAmount] of Object.entries(burgerObj.ingredients)) {
    ingredients[ingredientName] = ingredientAmount * quantity;
  }

  // Update the ingredient stock for the burger
  await fetch('/api/ingredients', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ingredients)
  });  
};

// Function to handle the order submission
const handleSubmit = async (hamburgers) => {
  console.log('handleSubmit called');
  // Get the burgers ordered array
  const burgersOrdered = getBurgersOrdered(hamburgers);

  // Loop through each burger and update the ingredient stock
  for (const burger of burgersOrdered) {
    console.log('Burger:', burger);

    // Update the ingredient stock for the burger
    await updateStock(burger.name, burger.quantity);
  }

  // Fetch the updated ingredient stock after submitting the form
  const response = await fetch('/api/ingredients');
  const data = await response.json();
  console.log(data);
};
  
submitBtn.addEventListener("click", async (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Fetch hamburgers
  const hamburgers = await fetchHamburgers();
  
  // Handle the order submission
  await handleSubmit(hamburgers);
});

// Event listener to increase/decrease orders
increaseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    quantities[index].innerText = parseInt(quantities[index].innerText) + 1;
  });
});

decreaseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (parseInt(quantities[index].innerText) > 0) {
      quantities[index].innerText = parseInt(quantities[index].innerText) - 1;
    }
  });
});
