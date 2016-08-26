function pizza(){
  this.small = 4.50;
  this.medium = 6.50;
  this.large = 8.50;
  this.pizzaSize;
  this.toppings = [];
  this.numberOfToppings = 0;
};

pizza.prototype.sizePrice = function(size) {
  if (size === "small"){return this.small};
  if (size === "medium"){return this.medium};
  if (size === "large"){return this.large};
};

pizza.prototype.pizzaPrice = function(sizePrice, toppingsPrice){
return sizePrice+toppingsPrice;
};

pizza.prototype.toppingsPrice = function() {
  return this.numberOfToppings * 1.5;
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

function writeNewToppingSelection(pizzaObject){
  pizzaObject.numberOfToppings += 1;
  $(".toppings").append("<div id=toppings-0-"+pizzaObject.numberOfToppings+"> <select class='toppings-dropdown'> <option value='none'>None</option> <option value='cheese'>Cheese</option> </select> </div>");
}

function writeOrderSummary(pizza){
  $(".order-summary").append("<ul> </ul>")
  $(".order-summary ul").append("<li>Pizza Size: "+pizza.pizzaSize+"</li>")
}

$(document).ready(function(){
  $("#order-now").click(function(){
    $(".intro-splash").hide();
    $(".order").show();
});
  var numberOfPizzas = 0;
  var pizzaObject = new pizza;
  $("#submit").click(function(){
    var customerInputSize = $(".order .size option:checked").val();
    var customerInputTopping = $(".order .toppings option:checked").val();
    var selectedSizePrice = pizzaObject.sizePrice(customerInputSize);
    var selectedToppingPrice = pizzaObject.toppingsPrice();
    var outputPrice = pizzaObject.pizzaPrice(selectedSizePrice, selectedToppingPrice);
    alert(formatOutput(outputPrice));
  });
  $("#addTopping").click(function(){
    writeNewToppingSelection(pizzaObject);
  });
});