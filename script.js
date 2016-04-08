function Pizza (dough, toppings, pieSize) {
  this.dough = dough;
  this.toppings = toppings;
  this.pieSize = pieSize;
}

Pizza.prototype.totalCostPizza = function(dough, toppings, pieSize) {

  var totalOrder = 0;

  if (this.dough === 1) { //regular
    totalOrder += 1;
  }

  if (this.dough === 2) { //garlic
    totalOrder += 2;
  }

  if (this.dough === 3) { //whole wheat
    totalOrder += 3;
  }

  if (this.dough === 4) { //gluten free
    totalOrder += 4;
  }

  if (this.toppings === 1 || this.toppings === 2) {
    totalOrder += 2;
  }

  if (this.toppings === 3 || this.toppings === 4) {
    totalOrder += 3;
  }

  if (this.toppings === 5) {
    totalOrder += 4;
  }

   if (this.pieSize === 1) { //small
     totalOrder += 0;
   }
   if (this.pieSize === 2) { //medium
     totalOrder += 1;
   }
   if (this.pieSize === 3) { //large
     totalOrder += 2;
   }
   if (this.pieSize === 4) {
     totalOrder += 4;
   }
  //  if (this. === 2) {
  //    totalOrder += 2;
  //  }

   return totalOrder;
 }


$(document).ready(function() {

  $("button#pickUpButton").click(function() {

   $('#nameInfo').toggle();
   });

  $("button#deliveryButton").click(function() {
   $('#nameInfo').toggle();
   $('#addressInfo').toggle();
   });

 $("form#pizzaToppings").submit(function(event) {
   event.preventDefault();

   var inputName = $("input#name").val();
   var inputAddress = $("input#address").val();
   var inputToppings = parseInt($("input#toppingsPizza").val());
   var inputDough = parseInt($("input#doughChoice").val());
   var inputPizzaSize = parseInt($("input#pieSize").val());
   var newPizza = new Pizza(inputDough, inputToppings, inputPizzaSize);

   var pizzaPieOrder = newPizza.totalOrder();

   $("#showPizzaRecipt").submit(function() {
    $("#showPizzaRecipt").show();
    $("#pizzaName").text(inputName);
    $("#deliveryAddress")
    $("#pizzaTotalCost").text(pizzaPieOrder);

  });
 });
});
