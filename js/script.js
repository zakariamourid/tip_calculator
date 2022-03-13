const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const reset = document.querySelector(".btn-reset");
const tip_percent = document.querySelector(".box.active");
const tip = document.querySelector("#tip");
const total_tip = document.querySelector("#total-tip");
const percentages = document.querySelectorAll(".box");
function removeActive() {
  percentages.forEach((percentage) => {
    percentage.classList.remove("active");
  });
}
function updateValue() {
  const tip_percent = document.querySelector(".box.active");
  var tip_amount = (parseInt(tip_percent.textContent) * bill.value) / 100;
  var people_number = people.value;
  tip.textContent = "$" + tip_amount;
  if (people_number == "") {
    people_number = 1;
  }
  var total_tip_amount = tip_amount * parseInt(people_number);
  total_tip.textContent = "$" + total_tip_amount;
}
bill.addEventListener("input", updateValue);
people.addEventListener("input", updateValue);
percentages.forEach((percentage) => {
  percentage.addEventListener("click", () => {
    removeActive();
    percentage.classList.add("active");
    updateValue();
  });
});
reset.addEventListener("click", () => {
  total_tip.textContent = "$0.00";
  tip.textContent = "$0.00";
  bill.value = "";
  people.value = "";
  removeActive();
});
