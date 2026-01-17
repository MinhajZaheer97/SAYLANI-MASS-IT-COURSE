var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < phones.length; i++) {
  document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");
