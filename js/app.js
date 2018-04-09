var raisedAmountWidth = 0,
    goalAmount = 16500,
    currentAmount = document.getElementById("currentAmount").innerHTML,
    progressBar = document.getElementById("amountProgress");

function scale(elem) {
  // console.log("scaling the bar");
  var s = currentAmount;
  var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}='\-_`~()]/g,"");
  var finalString = punctuationless.replace(/\s{2,}/g," ");
  var raisedAmountWidth = ((finalString - 0) / (goalAmount - 0))*100;
  var width = 0;
  function frame() {
    // console.log('width: ' + width + '%');
    // console.log('raised: ' + raisedAmountWidth);

    if (width <= raisedAmountWidth && width < 100) {
      console.log(width)
      console.log('less than, shoudl proceed')
      width++; // update parameters
      elem.style.width = width + '%'; // show frame
    } else if (width >= raisedAmountWidth) {  // check finish condition
      elem.style.width =  '100%'; // show frame
      clearInterval(id);
      // console.log('done');
    }
  }
  var id = setInterval(frame, 10) // draw every 10ms
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("amountProgress").style.width = "0%";
  scale(progressBar);
});

var twitter = function(e){
  e.preventDefault()
  social_url = "https://twitter.com/intent/tweet?source=webclient&text=" + encodeURI(window.location + " Orang-Utans in die Freiheit! ") + "%23born2bewild";
  window.open(social_url, "_blank").focus();
}

var twitterVideo = function(e){
  e.preventDefault();
  var msg = String(document.getElementById("twitter-video-share-btn").getAttribute("data-share-msg"));
  social_url = "https://twitter.com/intent/tweet?source=webclient&text=" + encodeURI(window.location + " " + msg + " ") + "%23born2bewild";
  window.open(social_url, "_blank").focus();
}

var facebook = function(e){
  e.preventDefault()
  social_url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(window.location);
  window.open(social_url, "_blank").focus();
}


document.getElementsByClassName('twitter-share')[0].onclick = twitter
document.getElementsByClassName('twitter-share')[1].onclick = twitterVideo
document.getElementsByClassName('facebook-share')[0].onclick = facebook
document.getElementsByClassName('facebook-share')[1].onclick = facebook

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

rightHeight.init();
