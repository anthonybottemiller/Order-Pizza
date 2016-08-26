function pizza(){
  this.small = 4.50;
}
pizza.prototype.price = function() {
  return this.small;
}
$(document).ready(function(){
  var pizzaObject = new pizza;
  var outputPrice = pizzaObject.price();
  var outputPrice = "$"+outputPrice.toPrecision(3)
  alert(outputPrice);
});