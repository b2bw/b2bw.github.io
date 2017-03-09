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

  //  social_url = {
  //         facebook: "https://www.facebook.com/sharer/sharer.php?u="
  //         twitter: "https://twitter.com/intent/tweet?source=webclient&text="
  //       }[social_network]
   //
  //       social_url += encodeURI(window.location)
   //
  //       window.open(social_url, "_blank").focus()


var twitter = function(e){
  console.log("twittttter");
  e.preventDefault()
  social_url = "https://twitter.com/intent/tweet?source=webclient&text=" + encodeURI(window.location + " Orang-Utans in die Freiheit! ") + "%23born2bewild";
  window.open(social_url, "_blank").focus();
}

var facebook = function(e){
  e.preventDefault()
  social_url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(window.location);
  window.open(social_url, "_blank").focus();
}
document.getElementsByClassName('twitter-share')[0].onclick = twitter
document.getElementsByClassName('facebook-share')[0].onclick = facebook

//get the height of the top left section
var TLDiv = document.getElementsByClassName('top-left')[0]
var TRDiv = document.getElementsByClassName('top-right')[0]

function resizeTopRight(){
  var TLHeight = TLDiv.offsetHeight
  var TRHeight = TRDiv.offsetHeight
  if(TRHeight <= TLHeight){
    TRDiv.style.height= TLHeight+"px";
  } else {
    TRDiv.style.height = "auto";
  }
}

window.addEventListener('resize', resizeTopRight, false);
resizeTopRight();
