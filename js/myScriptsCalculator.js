

var display = "0";
var memory = 0.0;
var usedMemory = false;
var resultRequested = false;
var operation = " ";

function division (a, b) {
  return a/b;
}

function multiplication (a, b) {
  return a*b;
}

function subtraction (a, b) {
  return a-b;
}

function sum (a,b) {
  return a+b;
}

$(document).ready(function() {

    // functionality of button "1"
  $("#btn1").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="1";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="1";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "2"
  $("#btn2").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="2";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="2";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "3"
  $("#btn3").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="3";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="3";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "4"
  $("#btn4").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="4";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="4";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "5"
  $("#btn5").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="5";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="5";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "6"
  $("#btn6").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="6";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="6";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "7"
  $("#btn7").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="7";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="7";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "8"
  $("#btn8").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="8";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="8";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "9"
  $("#btn9").click(function() {
    if (display === "0" || resultRequested === true)
    {
      display ="9";
      resultRequested = false;
    }
    else if (display.length < 9)
    {
      display +="9";
    }
    else
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "0"
  $("#btn0").click(function() {
    if (display !== "0" && display.length < 9)
    {
      display +="0";
    }
    else if (resultRequested === true)
    {
      display ="0";
      resultRequested = false;
    }
    else if (display.length >= 9)
    {
      display = "Digit Limit Met";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "."
  $("#btnDot").click(function() {
    if (display.includes(".") === false)
    {
      display +=".";
      $("#calc-display").html(display);
      console.log(display);
    }
  });

    // functionality of button "CE"
  $("#btnCE").click(function() {
    display ="0";
    $("#calc-display").html(display);
    console.log("display is: ", display);
    console.log("memory is: ", memory);
  });

    // functionality of button "AC"
  $("#btnAC").click(function() {
    display ="0";
    memory = 0;
    usedMemory = false;
    operation = " ";
    $("#calc-display").html(display);
    console.log("display is: ", display);
    console.log("memory is: ", memory);
  });

    // functionality of button "="
  $("#btnEqual").click(function() {
    if (memory === 0 && resultRequested === true) {}
    else {
      switch (operation) {
        case "division":
          memory = division(memory, Number(display));
          display = memory.toString();
          memory = 0;
          usedMemory = false;
          $("#calc-display").html(display);
          console.log("display is: ", display);
          console.log("memory is: ", memory);
          break;
        case "multiplication":
          memory = multiplication(memory, Number(display));
          display = memory.toString();
          memory = 0;
          usedMemory = false;
          $("#calc-display").html(display);
          console.log("display is: ", display);
          console.log("memory is: ", memory);
          break;
        case "subtraction":
          memory = subtraction(memory, Number(display));
          display = memory.toString();
          memory = 0;
          usedMemory = false;
          $("#calc-display").html(display);
          console.log("display is: ", display);
          console.log("memory is: ", memory);
          break;
        case "sum":
          memory = sum(memory, Number(display));
          display = memory.toString();
          memory = 0;
          usedMemory = false;
          $("#calc-display").html(display);
          console.log("display is: ", display);
          console.log("memory is: ", memory);
          break;
        default:
          display = "Error!";
      }
    }

    resultRequested=true;

  });

    // functionality of button "/"
  $("#btnDiv").click(function() {
    if (usedMemory === false)
    {
      memory = Number(display);
      usedMemory = true;
      operation = "division";
      display ="0";
      console.log("memory is: ", memory);
    }
    else
    {
      switch (operation) {
        case "division":
          memory = division(memory, Number(display));
          operation = "division";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "multiplication":
          memory = multiplication(memory, Number(display));
          operation = "division";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "subtraction":
          memory = subtraction(memory, Number(display));
          operation = "division";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "sum":
          memory = sum(memory, Number(display));
          operation = "division";
          display ="0";
          console.log("memory is: ", memory);
          break;
        }
      }
    });

  // functionality of button "x"
  $("#btnMul").click(function() {
    if (usedMemory === false)
    {
      memory = Number(display);
      usedMemory = true;
      operation = "multiplication";
      display ="0";
      console.log("memory is: ", memory);
    }
    else
    {
      switch (operation) {
        case "division":
          memory = division(memory, Number(display));
          operation = "multiplication";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "multiplication":
          memory = multiplication(memory, Number(display));
          operation = "multiplication";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "subtraction":
          memory = subtraction(memory, Number(display));
          operation = "multiplication";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "sum":
          memory = sum(memory, Number(display));
          operation = "multiplication";
          display ="0";
          console.log("memory is: ", memory);
          break;
        }
      }
    });

  // functionality of button "-"
  $("#btnSub").click(function() {
    if (usedMemory === false)
    {
      memory = Number(display);
      usedMemory = true;
      operation = "subtraction";
      display ="0";
      console.log("memory is: ", memory);
    }
    else
    {
      switch (operation) {
        case "division":
          memory = division(memory, Number(display));
          operation = "subtraction";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "multiplication":
          memory = multiplication(memory, Number(display));
          operation = "subtraction";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "subtraction":
          memory = subtraction(memory, Number(display));
          operation = "subtraction";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "sum":
          memory = sum(memory, Number(display));
          operation = "subtraction";
          display ="0";
          console.log("memory is: ", memory);
          break;
        }
      }
    });

  // functionality of button "+"
  $("#btnAdd").click(function() {
    if (usedMemory === false)
    {
      memory = Number(display);
      usedMemory = true;
      operation = "sum";
      display ="0";
      console.log("memory is: ", memory);
    }
    else
    {
      switch (operation) {
        case "division":
          memory = division(memory, Number(display));
          operation = "sum";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "multiplication":
          memory = multiplication(memory, Number(display));
          operation = "sum";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "subtraction":
          memory = subtraction(memory, Number(display));
          operation = "sum";
          display ="0";
          console.log("memory is: ", memory);
          break;
        case "sum":
          memory = sum(memory, Number(display));
          operation = "sum";
          display ="0";
          console.log("memory is: ", memory);
          break;
        }
      }
    });

}); // end of $(document).ready()
