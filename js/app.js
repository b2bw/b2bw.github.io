var raisedAmountWidth = 0,
    goalAmount = 6000,
    currentAmount = document.getElementById("currentAmount").innerHTML,
    raisedAmountWidth = ((currentAmount - 0) / (goalAmount - 0))*100,
    progressBar = document.getElementById("amountProgress");

function scale(elem) {
  var width = 0
  function frame() {
    width++  // update parameters
    elem.style.width = width + '%' // show frame
    if (width >= raisedAmountWidth)  // check finish condition
      clearInterval(id)
  }
  var id = setInterval(frame, 10) // draw every 10ms
}


document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("amountProgress").style.width = "0%";
    scale(progressBar)
  });
