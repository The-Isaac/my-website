let countRamen = document.getElementById("countRamen");
let countMochi = document.getElementById("countMochi");
let totalItems = document.getElementById("total-items");
let totalCost = document.getElementById("total-cost");
let fullString ="";
let cost = "Cost";


function increment(food) {
  food.innerText = parseInt(food.innerText) + 1;
  totalItems.innerText = parseInt(totalItems.innerText) + 1;
  fullString = food.concat(cost);
  let foodPrice = document.getElementById(fullString);
  totalCost.innerText = parseInt(totalCost.innerText) + parseInt(foodPrice);
}

function decrement(food) {
  if (parseInt(food.innerText) > 0) {
    food.innerText = parseInt(food.innerText) - 1;
    totalItems.innerText = parseInt(totalItems.innerText) - 1;
  }
}

