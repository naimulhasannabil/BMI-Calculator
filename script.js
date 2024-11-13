let height = document.getElementById("height");
let height2 = document.getElementById("height2");
let weight = document.getElementById("Weight");
let button = document.getElementById("button");

let score = document.getElementById("score");
let result = document.querySelector(".result");

button.addEventListener("click", function () {
  let newHeight = parseFloat(height.value);
  let newHeight2 = parseFloat(height2.value);
  let newWeight = parseFloat(weight.value);
  let foot = newHeight * 0.3048;

  let inch = newHeight2 * 0.0254;

  let meter = foot + inch;

  let sqrHeight = (meter * meter).toFixed(8);

  let bmi = newWeight / sqrHeight;
  score.textContent = bmi.toFixed(2);
  result.style.display = "block";

  if (score.textContent < 18.6) {
    score.style.background = "#ffeaa7";
  } else if (score.textContent < 24.9) {
    score.style.background = "#55efc4";
  } else {
    score.style.background = "#d63031";
  }
});

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
