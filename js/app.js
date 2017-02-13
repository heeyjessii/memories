var clicks = 0;
var firstClick;
var secondClick;
var cardBack = "./assets/download.png"
var matches = 0;

function flip(id) {
  document.getElementById(id).style.transform = 'rotateY(180deg)';
  if(document.getElementById(id).style.transform === 'rotateY(180deg)'){
    setTimeout(function(){
      document.getElementById(id).style.transform = "rotateY(0deg)";
    }, 1000);
  }
  if(clicks === 2) {
  }
  if (clicks === 0) {
    firstClick = id;
    clicks = 1;
  } else {
    clicks = 2;
    secondClick = id;
    timer = setInterval("check()", 1000);
  }
}

function check() {
  clearInterval(timer);
  clicks = 0;
  if (document.getElementById('eight') == document.getElementById('three')) {
    document.getElementById('eight').style.opacity = "0";
    document.getElementById('three').style.opacity = "0";
  } else {
    document.firstClick = cardBack;
    document.secondClick = cardBack;
  }
}




