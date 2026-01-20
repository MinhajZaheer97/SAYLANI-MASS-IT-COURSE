
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Enter item:").toLowerCase();

if (items.includes(input)) {
  alert("Found");
} else {
  alert("Not found");
}