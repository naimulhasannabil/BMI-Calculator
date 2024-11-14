let heightOption = document.getElementById("heightOption");
let weightOption = document.getElementById("weightOption");
let height1 = document.getElementById("height1");
let heightFoot = document.getElementById("height");
let heightInch = document.getElementById("height2");
let weight = document.getElementById("Weight");
let button = document.getElementById("button");

let score = document.getElementById("score");
let result = document.querySelector(".result");

// Function to update height input fields based on height option
heightOption.addEventListener("change", function () {
  if (heightOption.value === "Inch") {
    heightFoot.style.display = "inline-block";
    heightInch.style.display = "inline-block";
    height1.style.display = "none";
  } else {
    heightFoot.style.display = "none";
    heightInch.style.display = "none";
    height1.style.display = "inline-block";
    height1.placeholder = `Enter height in ${heightOption.value}`;
  }
});

// BMI Calculation based on height and weight options
button.addEventListener("click", function () {
  let heightInMeters;
  let weightInKg;
  
  if (heightOption.value === "CM") {
    heightInMeters = parseFloat(height1.value) / 100;
  } else if (heightOption.value === "M") {
    heightInMeters = parseFloat(height1.value);
  } else if (heightOption.value === "Inch") {
    let foot = parseFloat(heightFoot.value) * 0.3048;
    let inch = parseFloat(heightInch.value) * 0.0254;
    heightInMeters = foot + inch;
  }

  if (weightOption.value === "KG") {
    weightInKg = parseFloat(weight.value);
  } else if (weightOption.value === "LB") {
    weightInKg = parseFloat(weight.value) * 0.453592;
  }

  let bmi = weightInKg / (heightInMeters * heightInMeters);
  score.textContent = bmi.toFixed(2);
  result.style.display = "block";

  if (bmi < 18.6) {
    score.style.background = "#ffeaa7";
  } else if (bmi < 24.9) {
    score.style.background = "#55efc4";
  } else {
    score.style.background = "#d63031";
  }
});

// Prevent form submission on Enter key press
let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
