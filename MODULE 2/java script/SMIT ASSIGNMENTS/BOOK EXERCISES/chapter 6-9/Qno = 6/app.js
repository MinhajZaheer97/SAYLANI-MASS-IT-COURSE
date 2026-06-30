var subject1 = prompt("enter 1st subject");
var subject2 = prompt("enter 2nd subject");
var subject3 = prompt("enter 3rd subject");

var obtainedmarksinsubject1 = Number(
    prompt("enter the obtained marks in " + subject1)
);
var obtainedmarksinsubject2 = Number(
    prompt("enter the obtained marks in " + subject2)
);
var obtainedmarksinsubject3 = Number(
    prompt("enter the obtained marks in " + subject3)
);

var totalmarks = 100;

var percentage1 = (obtainedmarksinsubject1 / totalmarks) * 100;
var percentage2 = (obtainedmarksinsubject2 / totalmarks) * 100;
var percentage3 = (obtainedmarksinsubject3 / totalmarks) * 100;

document.write(
    "SUBJECT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOTAL MARKS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OBTAINED MARKS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PERCENTAGE"
);

document.write("<hr>");

document.write(
    subject1 + '<span style="margin-right:100px"></span>' +
    totalmarks + '<span style="margin-right:150px"></span>' +
    obtainedmarksinsubject1 + '<span style="margin-right:200px"></span>' +
    percentage1 + "%"
);

document.write("<hr>");

document.write(
    subject2 + '<span style="margin-right:100px"></span>' +
    totalmarks + '<span style="margin-right:150px"></span>' +
    obtainedmarksinsubject2 + '<span style="margin-right:200px"></span>' +
    percentage2 + "%"
);

document.write("<hr>");

document.write(
    subject3 + '<span style="margin-right:100px">.</span>' +
    totalmarks + '<span style="margin-right:150px"></span>' +
    obtainedmarksinsubject3 + '<span style="margin-right:200px"></span>' +
    percentage3 + "%"
);

document.write("<hr>");

var total = (totalmarks * 3);
var totalobtained = (obtainedmarksinsubject1 + obtainedmarksinsubject2 + obtainedmarksinsubject3);
var totalpercentage = ((totalobtained / total) * 100)

document.write(
    "TOTAL" + '<span style="margin-right:100px"></span>' +
     total + '<span style="margin-right:150px"></span>' +
     totalobtained + '<span style="margin-right:200px"></span>' +
     totalpercentage + "%"
    )

document.write("<hr>");