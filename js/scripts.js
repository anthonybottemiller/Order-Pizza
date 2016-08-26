function pizza(){
  this.small = 4.50;
  this.medium = 6.50;
  this.large = 7.50;
}
pizza.prototype.sizePrice = function(size) {
  if (size === "small"){return this.small};
  if (size === "medium"){return this.medium}
  if (size === "large"){return this.large}
}
$(document).ready(function(){
  var pizzaObject = new pizza;
  $("#submit").click(function(){
    var customerInput = $(".order option:checked").val();
    var outputPrice = pizzaObject.sizePrice(customerInput);
    var outputPrice = "$"+outputPrice.toPrecision(3)
    alert(outputPrice);
  });
});