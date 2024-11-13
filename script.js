let height = document.getElementById("height");
let weight = document.getElementById("Weight");
let button = document.getElementById("button");

let score = document.getElementById("score");
let result = document.querySelector(".result");

button.addEventListener("click", function () {
  let newHeight = parseFloat(height.value);
  let newWeight = parseFloat(weight.value);
  newHeight = newHeight / 100;
  let sqrHeight = newHeight * newHeight
});

let form = document.getElementById("form");
form.addEventListener('submit', function(e){
  e.preventDefault();
})
