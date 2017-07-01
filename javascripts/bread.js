// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = [];
	var req = new XMLHttpRequest();
	maker.loadBread = function()
	{
		req.open("GET", "Data/bread.json");
		req.send();
		req.addEventListener('load', function()
		{
			var data = JSON.parse(event.target.responseText).bread[0];
			maker.logIt();
		})
	}
  // Augment the original object with another method
  maker.addBread = function() {
    return breadPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});