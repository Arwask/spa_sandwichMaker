// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"Meats" :
		{
		"chicken": 1.00,
		"turkey": 0.90,
		"ham": 0.80,
		"bacon": 0.70,
		"beef": 0.85
		}
	};
	
  maker.addMeat = function() {
    return meatPrices;
  };
  return maker;
})(SandwichMaker || {});