var SandwichMaker = (function(maker) {
	var meat = SandwichMaker.addMeat();
	var cheese = SandwichMaker.addCheese();
	var veggies = SandwichMaker.addVeggies();
	var condiment = SandwichMaker.addCondiments();
	var bread = SandwichMaker.addBread();

	var optionsArray = [meat, cheese, veggies, condiment, bread];
	optionsArray.forEach(function(item)
	{
		createDom(item);
	})
	
	function createDom(data)
	{
		let keyName = Object.keys(data);
		let mainDiv = document.getElementById('options');
		let subDiv = document.createElement('div');
		subDiv.setAttribute('id',`subDiv-${keyName}`);
		mainDiv.appendChild(subDiv);
		let labels = document.createElement('label');
		let valueKey = Object.values(data)[0];
		labels.innerHTML = `<b>${keyName}:<b>&nbsp`;
		subDiv.appendChild(labels)
		for(let i in valueKey)
		{
			let inputTag = document.createElement('input');
			inputTag.setAttribute('type','checkbox')
			inputTag.setAttribute('name', keyName);
			inputTag.setAttribute('id', i);
			inputTag.setAttribute('value', valueKey[i]);
			subDiv.appendChild(inputTag);
			let label = document.createElement('label');
			label.setAttribute('for',i)
			label.innerHTML = i;
			subDiv.appendChild(label);
		}

	}
  return maker;

})(SandwichMaker || {});