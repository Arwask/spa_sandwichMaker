var SandwichMaker = (function(maker) {
	SandwichMaker.loadMeat();
maker.logIt = function()
{
	console.log('hi')
	console.log(SandwichMaker.addMeat());
}
  return maker;

})(SandwichMaker || {});