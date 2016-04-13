function Pizza (pieSize, toppings, dough) {
  this.pizzaPieSize = pieSize;
  this.pizzaToppings = toppings;
  this.pizzaDough = dough;
}

Pizza.prototype.totalCostPizza = function() {

  var totalOrder = 0;
// debugger;
   if (this.pizzaPieSize === 1) { //medium
   totalOrder += 1;
   }

   if (this.pizzaPieSize === 2) { //medium
     totalOrder += 2;
   }
   if (this.pizzaPieSize === 3) { //large
     totalOrder += 3;
   }
   if (this.pizzaPieSize === 4) { //Xrtra large
     totalOrder += 4;
   }

   if (this.pizzaToppings === "Cheese") {
     totalOrder += 2;
   }
   if (this.pizzaToppings === "Pepperoni") {
     totalOrder += 2;
   }

   if (this.pizzaToppings === "Veggie") {
     totalOrder += 3;
   }
   if (this.pizzaToppings === "Meat") {
     totalOrder += 3;
   }

   if (this.pizzaToppings === "Supreme") {
     totalOrder += 4;
   }

   if (this.pizzaDough === 1) { //regular
     totalOrder += 1;
   }

   if (this.pizzaDough === 2) { //garlic
     totalOrder += 2;
   }

   if (this.pizzaDough === 3) { //whole wheat
     totalOrder += 3;
   }

   if (this.pizzaDough === 4) { //gluten free
     totalOrder += 4;
   }


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

 $("form#pizzaForm").submit(function(event) {
   event.preventDefault();
    // debugger;
   var inputName = $("input#name").val();
   var inputAddress = $("input#address").val();
   var inputToppings = $("input:radio[name=toppingsPizza]:checked").val();
   var inputDough = parseInt($("input:radio[name=doughChoice]:checked").val());
   var inputPizzaSize = parseInt($("input:radio[name=pieSize]:checked").val());
   var newPizza = new Pizza(inputPizzaSize, inputToppings, inputDough);

   var result = newPizza.totalCostPizza();
  var test = ("hello");
 $("ul#pizzaPizzaOrder").append("<li><span class='pizzaPieForYou'>"+inputName+"</span></li>");

 $(".pizzaPieForYou").last().click(function() {
    $("#showPizzaRecipt").show();
    $("#showPortland h2").text(inputName);
    $("#pizzaName").text(inputName);
    $("#pizzaAddress").text(inputAddress);
    $("#pieToppings").text(inputToppings);
    $("#result").text(result);
  });


 });
});
