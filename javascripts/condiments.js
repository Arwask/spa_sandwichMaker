// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
  	"Condiments" :
  	{
		"ketchup": 0.10,
		"mayo": 0.90,
		"pesto": 0.80,
		"honey mustard": 0.70,
		"guacamole": 0.85
		}
	};
  maker.addCondiments = function() {
    return condimentPrices;
  };
  return maker;
})(SandwichMaker || {});