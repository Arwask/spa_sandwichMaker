// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices;
	var req = new XMLHttpRequest();
	req.addEventListener('load', function()
	{
		var data = JSON.parse(event.target.responseText)
		for(var key in data.meats)
			{
				meatPrices.push(key.value);
			}
				console.log(meatPrices);
	})

  // Augment the original object with another method
  maker.addMeat = function() {
    return;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);