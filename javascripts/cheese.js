// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"Cheese":
  		{
		"mozzarella": 1.00,
		"american": 0.90,
		"pepper jack": 0.80,
		"feta": 0.70,
		"low fat": 0.85
		}
	};
  maker.addCheese = function() {
    return cheesePrices;
  };
  return maker;
})(SandwichMaker || {});