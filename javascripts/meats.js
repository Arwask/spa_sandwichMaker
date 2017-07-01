// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = [];
	var req = new XMLHttpRequest();
	maker.loadMeat = function()
	{
		req.open("GET", "Data/meat.json");
		req.send();
		req.addEventListener('load', function()
		{
			var meatPrices = JSON.parse(event.target.responseText).meats[0];
			maker.loadVeggies();
		})
	}
	
  // Augment the original object with another method
  maker.addMeat = function() {
    return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});