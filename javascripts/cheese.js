// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = [];
	var req = new XMLHttpRequest();
	maker.loadCheese = function()
	{
		req.open("GET", "Data/cheese.json");
		req.send();
		req.addEventListener('load', function()
		{
			var data = JSON.parse(event.target.responseText).cheese[0];
			maker.loadBread();
		})
	}
	
  // Augment the original object with another method
  maker.addCheese = function() {
    return cheesePrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});