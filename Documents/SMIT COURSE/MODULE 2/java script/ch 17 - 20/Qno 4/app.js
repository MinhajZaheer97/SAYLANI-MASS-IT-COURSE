
      alert("WANT TO GENERATE A TABLE");

      var number = Number(prompt("enter an number for table"));

      var lenth = Number(prompt("enter the table length for table"));

      document.write("<div style='text-align:center;'>");

      document.write("<h1>TABLE OF " + number + " </h1>" + "<br>" + "<hr>");

      for (var i = 1; i <= lenth; i++) {
        document.write(number + " X " + i + " = " + number * i + "<hr>");
      }

      document.write("</div>");