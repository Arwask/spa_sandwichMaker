// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping = [];

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("subDiv-Meats");
console.log(meatChooser);
var breadChooser = document.getElementById("subDiv-Bread");
var cheeseChooser = document.getElementById("subDiv-Cheese");
var veggiesChooser = document.getElementById("subDiv-Veggies");
var condimentsChooser = document.getElementById("subDiv-Condiments");
var chooser = [meatChooser, breadChooser, cheeseChooser, veggiesChooser, condimentsChooser];
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
chooser.forEach(function(item)
{

	item.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  // let checkboxes = item.getElementsByTagName('input');
  
  	console.log(event.target.checked)
	if(event.target.checked === true)
	{
	selectedTopping.push(event.target.id);
	finalSandwichPrice += parseFloat(event.target.value);
	
	var items = document.getElementById('selectedToppings');
	items.innerHTML = selectedTopping;

	var price = document.getElementById('totalPrice');
	price.innerHTML = finalSandwichPrice.toFixed(2);
	}
	else
	{
	let index =	selectedTopping.indexOf(event.target.id);
	selectedTopping.splice(index, 1);
	finalSandwichPrice -= parseFloat(event.target.value);
	
	var items = document.getElementById('selectedToppings');
	items.innerHTML = selectedTopping;

	var price = document.getElementById('totalPrice');
	price.innerHTML = finalSandwichPrice.toFixed(2);

	}

  // console.log(finalSandwichPrice.toFixed(2));
  // console.log(selectedTopping);
})

});