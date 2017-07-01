// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = [];
	var req = new XMLHttpRequest();
	maker.loadCondiments = function()
	{
		req.open("GET", "Data/condiments.json");
		req.send();
		req.addEventListener('load', function()
		{
			var data = JSON.parse(event.target.responseText).condiments[0];
			maker.loadCheese();
		})
	}
	
  // Augment the original object with another method
  maker.addCondiments = function() {
    return condimentPrices;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});