

var display = "0"; // stores the string with the digits in the calculator display
var memory = 0.0; // in "A Operation B", memory stores  the value of A
var operationSymbol = ""; // in "A Operation B", operationSymbol stores the type of Operation
var operationValue = 0.0; // in "A Operation B", operationValue stores the value of B
var usedMemory = false; // true if there is a value stored in memory, false otherwise
var operationRequested = false; // true if last pressed button was an operation button
var resultRequested = false; // true if last pressed button was the equals button


function aC() {
  display = "0";
  memory = 0.0;
  operationSymbol = "";
  operationValue = 0.0;
  usedMemory = false;
  operationRequested = false;
  resultRequested = false;
}

    // function used in digit buttons 1 to 9
function numBtn (digit) {
  operationRequested = false;
  resultRequested = false;
  if (display === "0" || resultRequested === true)
  {
    display = digit;
    resultRequested = false;
  }
  else if (display.length < 9)
  {
    display += digit;
  }
  else
  {
    display = "Digit Limit Met";
  }
  $("#calcDisplay").html(display);
}

function solve() {
  switch (operationSymbol) {
    case "div":
      memory = memory / operationValue;
      break;
    case "minus":
      memory = memory - operationValue;
      break;
    case "mult":
      memory = memory * operationValue;
      break;
    case "plus":
      memory = memory + operationValue;
      break;
    default:
  }
}

    // function used in operation buttons +, -, x and /
function oper(symbol) {
  if (operationRequested === true) {
    // if last pressed button was an operation, update value of operation
    operationSymbol = symbol;
  }
  else if (usedMemory === false) {
    memory = Number(display);
    usedMemory = true;
    operationSymbol = symbol;
    display ="0";
    operationRequested = true;
  }
  else {
    operationValue = Number(display);
    solve();
    $("#calcDisplay").html(memory.toString());
    operationSymbol = symbol;
    display ="0";
    operationRequested = true;
  }
  resultRequested = false;
}

function result() {
  if (resultRequested === true) {
    // if last pressed button was the result button, repeat last operation
    solve();
    $("#calcDisplay").html(memory.toString());
    display = "0";
  }
  else if (usedMemory === false) {
    // if there is nothing in memory, nothing happens
  }
  else if (operationRequested === false) {
    // if there is something in memory and last
    // button pressed was not an operation, solve request
    operationValue = Number(display);
    solve();
    $("#calcDisplay").html(memory.toString());
    display = "0";
    resultRequested = true;
  }
  else if (operationRequested === true) {
    operationValue = memory;
    solve();
    $("#calcDisplay").html(memory.toString());
    display = "0";
    resultRequested = true;
  }
  else {
    $("#calcDisplay").html("error");
  }
  operationRequested = false;
}

$(document).ready(function() {

    // functionality of button "1"
  $("#btn1").click(function() {
    numBtn("1");
  });

    // functionality of button "2"
  $("#btn2").click(function() {
    numBtn("2");
  });

    // functionality of button "3"
  $("#btn3").click(function() {
    numBtn("3");
  });

    // functionality of button "4"
  $("#btn4").click(function() {
    numBtn("4");
  });

    // functionality of button "5"
  $("#btn5").click(function() {
    numBtn("5");
  });

    // functionality of button "6"
  $("#btn6").click(function() {
    numBtn("6");
  });

    // functionality of button "7"
  $("#btn7").click(function() {
    numBtn("7");
  });

    // functionality of button "8"
  $("#btn8").click(function() {
    numBtn("8");
  });

    // functionality of button "9"
  $("#btn9").click(function() {
    numBtn("9");
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
    $("#calcDisplay").html(display);
  });

    // functionality of button "."
  $("#btnDot").click(function() {
    if (display.includes(".") === false)
    {
      display +=".";
      $("#calcDisplay").html(display);
    }
  });

    // functionality of button "CE", clean display
  $("#btnCE").click(function() {
    display ="0";
    $("#calcDisplay").html(display);
  });

    // functionality of button "AC", clean all memory
  $("#btnAC").click(function() {
    aC();
    $("#calcDisplay").html(display);
  });

    // functionality of button "="
  $("#btnEqual").click(function() {
    result();
  });

    // functionality of button "/"
  $("#btnDiv").click(function() {
    oper("div");
  });

  // functionality of button "x"
  $("#btnMul").click(function() {
    oper("mult");
    });

  // functionality of button "-"
  $("#btnSub").click(function() {
    oper("minus");
    });

  // functionality of button "+"
  $("#btnAdd").click(function() {
    oper("plus");
    });

}); // end of $(document).ready()
