function pizza(){
  this.small = 4.50;
  this.medium = 6.50;
  this.large = 8.50;
  this.pizzaSize;
  this.toppings = [];
  this.numberOfToppings = 0;
  this.toppingsPrice;
  this.priceOfPizza
};

pizza.prototype.sizePrice = function() {
  if (this.pizzaSize === "Small"){return this.small};
  if (this.pizzaSize === "Medium"){return this.medium};
  if (this.pizzaSize === "Large"){return this.large};
};

pizza.prototype.pizzaPrice = function(){
return this.sizePrice()+this.toppingsPrice();
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
  $(".toppings").append("<div id=toppings-0-"+pizzaObject.numberOfToppings+"> <select class='toppings-dropdown'> <option value='none'>None</option> <option value='Cheese'>Cheese</option> <option value='Pepperoni'>Pepperoni</option> <option value='Sausage'>Sausage</option> <option value='Beef'>Beef</option><option value='Canadian Bacon'>Canadian Bacon</option> <option value='Pineapple'>Pineapple</option> <option value='Olive'>Olive</option></select> </div>");
}

function writeOrderSummary(pizza){
  $(".order-summary").append("<ul> </ul>")
  $(".order-summary ul").append("<li>Pizza Size: "+pizza.pizzaSize+"</li>")
  $(".order-summary ul").append("<li>Number of Toppings: "+pizza.numberOfToppings+"</li>")
  $(".order-summary ul").append("<li>Price of Toppings: $"+pizza.toppingsPrice()+"</li>")
  $(".order-summary ul").append("<li>Order Total: "+formatOutput(pizza.pizzaPrice()))
}

$(document).ready(function(){
  var pizzaObject = new pizza;

  $("#order-now").click(function(){
    $(".intro-splash").fadeOut();
    $(".order").delay(500);
    $(".order").fadeIn();
  });
  $("#submit").click(function(){
    pizzaObject.pizzaSize = $(".order .size option:checked").val();
    $(".order").fadeOut();
    $(".order-summary").delay(500)
    $(".order-summary").fadeIn();
    writeOrderSummary(pizzaObject);
  });
  $("#addTopping").click(function(){
    writeNewToppingSelection(pizzaObject);
  });
});