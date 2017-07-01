// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = [];
  // SandwichMaker.optionList = SandwichMaker.optionList || [];
	maker.loadVeggies = function()
	{
	var req = new XMLHttpRequest();
		req.open("GET", "Data/veggies.json");
		req.send();
		req.addEventListener('load', function()
		{
			var veggiePrices = JSON.parse(event.target.responseText).veggies[0];		
			maker.loadCondiments();
		});
	}
  // Augment the original object with another method
  maker.addVeggies = function() {
    return veggiePrices[0];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});