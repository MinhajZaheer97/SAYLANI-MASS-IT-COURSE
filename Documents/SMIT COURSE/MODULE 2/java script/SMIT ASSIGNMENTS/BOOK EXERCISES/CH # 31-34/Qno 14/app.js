var customerName = prompt("Enter customer name: ").toLowerCase();
var month = prompt("Enter month: ").toLowerCase();
var units = 410;
var chargesPerUnit = 16;
var netAmount = units * chargesPerUnit;
var lateSurcharge = 350;
var grossAmount = netAmount + lateSurcharge;

document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + month + "<br>");
document.write("Number of units: " + units + "<br>");
document.write("Charges per unit: " + chargesPerUnit + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late payment surcharge: " + lateSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount);