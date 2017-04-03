
$(document).ready(function(){

  var workT = 25;
  var restT = 5;
  var workDone = false;
  var paused = true;
  var timeRunning = false;

  function formatTime(inputMinutes) {//this function takes a num and returns a string
    if (Math.floor((inputMinutes-Math.floor(inputMinutes))*60) > 9)
    {
      var formattedTime = Math.floor(inputMinutes).toString()+":"+Math.floor((inputMinutes-Math.floor(inputMinutes))*60).toString();
    }
    else if (Math.floor((inputMinutes-Math.floor(inputMinutes))*60) === 0)
    {
        var formattedTime = Math.floor(inputMinutes).toString()+":0"+ Math.floor((inputMinutes-Math.floor(inputMinutes))*60).toString();
    }
    return formattedTime;
  }

  $("#totalWT").html(formatTime(workT));
  $("#totalRT").html(formatTime(restT));

  $("#btnPlusWork").click(function() {
    if (workT < 60 && paused === true) {
      workT += 1;
      console.log("work time= ", workT); //debug line
      $("#totalWT").html(formatTime(workT));
    }
  });

  $("#btnMinusWork").click(function() {
    if (workT > 1 && paused === true) {
      workT -= 1;
      console.log("work time= ", workT); //debug line
      $("#totalWT").html(formatTime(workT));
    }
  });

  $("#btnPlusRest").click(function() {
    if (restT < 30 && paused === true) {
      restT += 1;
      console.log("rest time= ", restT); //debug line
      $("#totalRT").html(formatTime(restT));
    }
  });

  $("#btnMinusRest").click(function() {
    if (restT > 1 && paused === true) {
      restT -= 1;
      console.log("rest time= ", restT); //debug line
      $("#totalRT").html(formatTime(restT));
    }
  });

  function startTimer(durationWork, durationRest, display) {
    var totalTime = durationWork;
    var timer = durationWork, minutes, seconds;
    var myTimer = setInterval(function() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      function updateProgress() {
        var elapsedTime = -(parseInt(minutes, 10)*60 + parseInt(seconds, 10))+(totalTime);
        progressValue = Math.floor((elapsedTime/(totalTime))*100);
        console.log(progressValue, "% elapsed seconds: ", elapsedTime, "total minutes: ", totalTime/60);
        return progressValue;
      }

      if (workDone === false) {
        $("#text").html('<span class="working">Work</span>');
        $("#progressBar").html('<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="'+updateProgress()+'" aria-valuemin="0" aria-valuemax="100" style="width: '+updateProgress()+'%;">'+updateProgress()+'%</div>');
      } else if (workDone === true) {
        $("#text").html('<span class="resting">Rest</span>');
        $("#progressBar").html('<div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="'+updateProgress()+'" aria-valuemin="0" aria-valuemax="100" style="width: '+updateProgress()+'%;">'+updateProgress()+'%</div>');
      }

      if (paused === false) {
        timer = --timer;
      } else if (paused === true) {
        timer = timer;
      }

      if (timer < 0) {
        if (workDone === true) {
          timer = durationWork;
          workDone = false;
          clearInterval(myTimer);
          paused = true;
          totalTime = durationWork;
        } else {
          timer = durationRest;
          workDone = !workDone;
          totalTime = durationRest;
        }
      }

      $("#pause").click(function() {
        paused = true;
      })

      $("#reset").click(function() {
        paused = true;
        timeRunning = false;
        workDone = false;
        clearInterval(myTimer);
        $("#text").html('<span class="working"></span>');
        $("#progressBar").html('<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">0%</div>');
        $("#time").html('00:00');
      })

    }, 1000);
  }

  $("#start").click(function() {
    if (paused === true && timeRunning === false) {
      timeRunning = true;
      var workInSecs = 60 * workT;
      var restInSecs = 60 * restT;
      display = $("#time");
      paused = false;
      startTimer(workInSecs, restInSecs, display);
    } else if (paused === true && timeRunning === true) {
      paused = false;
    }
  })


});
