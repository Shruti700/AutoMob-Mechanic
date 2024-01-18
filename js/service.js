// Get the paragraph element by its id
var display = document.getElementById("timercheck");
var logged=JSON.parse(sessionStorage.getItem("1")).timenow + 100000;
var present= Date.now(); 
// Set the initial time in seconds
var time = (logged-present)<600000? (logged-present)/1000: 0;
   
// Define a function to update the display and decrease the time
function updateTimer() {
  // Format the time as 00:xx
  var mins=  Math.floor(time/60);
  var secs= Math.floor(time%60);
  var formattedTime = (mins<10?"0"+mins:mins)+" : "+ (secs < 10 ? "0" + secs : secs);

  // Display the time
  display.textContent ="*Offer ends in "+ formattedTime;
    display.style="color:red;margin-top:2%;"
  // Decrease the time by one second
  time--;

  // If the time reaches zero, stop the timer and hide the display
  if (time < 0) {
    clearInterval(timer);
    display.style.display = "none";
    document.getElementById('correct').style.display="none";
    document.getElementById('strike').style.textDecoration="none"
document.getElementById('save').style.display="none";
  }
}

// Create a timer that calls the updateTimer function every 1000 milliseconds (1 second)
var timer = setInterval(updateTimer, 1000);
