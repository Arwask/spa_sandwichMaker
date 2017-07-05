// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"Bread":
  		{
		"white": 0.90,
		"wheat": 0.95,
		"multigrain": 1.80,
		"french": 1.10,
		"raagi": 1.35
		}
	};
	
  maker.addBread = function() {
    return breadPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});