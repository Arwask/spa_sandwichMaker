// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	"Veggies":
  		{
		"bellpepper": 1.00,
		"tomato": 0.90,
		"cucumber": 0.80,
		"lettuce": 0.70,
		"onions": 0.85
		}
	};
  maker.addVeggies = function() {
    return veggiePrices;
  };
  
  return maker;
})(SandwichMaker || {});