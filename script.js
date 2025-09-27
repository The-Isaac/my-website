
let totalItems = document.getElementById("total-items");
let totalCost = document.getElementById("total-cost");
let fullString ="cost";
//let cost = "Cost";

content = document.getElementById("contentString")



function increment(food) {
  food.innerText = parseInt(food.innerText) + 1;
  totalItems.innerText = parseInt(totalItems.innerText) + 1;

  //Here IA showed me the .id property
  fullString = "cost" + (food.id).slice(5);
  itemPrice = document.getElementById(fullString);
  totalCost.innerText = parseInt(totalCost.innerText) + parseInt(itemPrice.innerText);
}

function decrement(food) {
  if (parseInt(food.innerText) > 0) {
    food.innerText = parseInt(food.innerText) - 1;
    totalItems.innerText = parseInt(totalItems.innerText) - 1;

  fullString = "cost" + (food.id).slice(5);
  itemPrice = document.getElementById(fullString);
  totalCost.innerText = parseInt(totalCost.innerText) - parseInt(itemPrice.innerText);
  }
}


