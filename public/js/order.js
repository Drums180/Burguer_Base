
 const orderNowButtons = document.querySelectorAll('.order-button');
 const orderReceivedButtons = document.querySelectorAll('.order-received-button');

 // Loop through each Order Now button and update its functionality
 orderNowButtons.forEach((button) => {
   button.addEventListener('click', (event) => {
     event.preventDefault();

     // Get the relevant ingredient card
     const card = button.closest('.box');
     const orderReceivedButton = card.querySelector('.order-received-button');

     // Hide the Order Now button and show the Order Received button
     button.classList.add('is-hidden');
     orderReceivedButton.classList.remove('is-hidden');
   });
 });

 // Loop through each Order Received button and update its functionality
 orderReceivedButtons.forEach((button) => {
     button.addEventListener('click', async (event) => {
       event.preventDefault();

       // Get the relevant ingredient card
       const card = button.closest('.box');
       let orderQuantity = card.querySelector('.order-quantity span').textContent.trim();
       const name = card.querySelector('h3').textContent.trim().toLowerCase();

       // Limit the number of decimals in the order quantity to 2
       orderQuantity = parseFloat(orderQuantity).toFixed(2);

       console.log(`Ordering ${orderQuantity} of ${name}`);

       // Update the stock and text of the ingredient card
       await updateIngredientStock(name, orderQuantity);
       card.querySelector('.order-quantity span').textContent = '0';

       // Refresh the page
       location.reload();
     });
 });


 async function updateIngredientStock(name, orderQuantity) {
     try {
       const response = await fetch(`/api/ingredients/name/${name}`);

       if (!response.ok) {
         throw new Error(`Error fetching ingredient with name ${name}: ${response.status} - ${response.statusText}`);
       }

       const ingredient = await response.json();

       const newStock = ingredient.stock + parseInt(orderQuantity);
       const updateResponse = await fetch(`/api/ingredients/name/${name}`, {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({ stock: newStock })
       });

       if (!updateResponse.ok) {
         throw new Error(`Error updating ingredient with name ${name}: ${updateResponse.status} - ${updateResponse.statusText}`);
       }

       console.log(`Ingredient with name ${name} stock updated successfully!`);
     } catch (error) {
       console.error(error);
     }
}