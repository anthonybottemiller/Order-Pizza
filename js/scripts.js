function pizza(){
  this.small = 4.50;
  this.medium = 6.50;
  this.large = 8.50;
  this.pizzaSize;
  this.toppings = [];
  this.numberOfToppings;
}
pizza.prototype.sizePrice = function(size) {
  if (size === "small"){return this.small};
  if (size === "medium"){return this.medium};
  if (size === "large"){return this.large};
};
pizza.prototype.pizzaPrice = function(sizePrice, toppingsPrice){
return sizePrice+toppingsPrice;
};
pizza.prototype.toppingsPrice = function(topping) {
  if (topping === "cheese"){return 1.5}
  else {return 0};
};
function formatOutput(number){
  var numberAsString = number.toString();
  var decimalPosition = 0;
  for (i=0; i < numberAsString.length; i++){
    if (numberAsString[i] ==="."){
      decimalPosition = i+2;
    };
  };
  if (decimalPosition === 0){return "$"+number}
  else {return "$"+number.toPrecision(decimalPosition)};
};

$(document).ready(function(){
  var pizzaObject = new pizza;
  $("#submit").click(function(){
    var customerInputSize = $(".order .size option:checked").val();
    var customerInputTopping = $(".order .toppings option:checked").val();
    var selectedSizePrice = pizzaObject.sizePrice(customerInputSize);
    var selectedToppingPrice = pizzaObject.toppingsPrice(customerInputTopping);
    var outputPrice = pizzaObject.pizzaPrice(selectedSizePrice, selectedToppingPrice);
    alert(formatOutput(outputPrice));
  });
});