document.getElementById("calorieForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const activity = parseFloat(document.getElementById("activity").value);

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Using Mifflin-St Jeor equation for BMR
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // for men
  const dailyCalories = bmr * activity;

  document.getElementById("result").style.display = "block";
  document.getElementById(
    "result"
  ).textContent = `Your daily calorie needs are: ${Math.round(
    dailyCalories
  )} calories.`;
});
