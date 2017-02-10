var clicks = 0;
var firstClick;
var secondClick;

function flip(id) {
  console.log(document.getElementById(id).getElementsByTagName('img')[0].src);
  document.getElementById(id).style.transform = 'rotateY(180deg)';
  if(document.getElementById(id).style.transform === 'rotateY(180deg)'){
    setTimeout(function(){
      document.getElementById(id).style.transform = "rotateY(0deg)";
    }, 1000);
  }
  if(flicks === 2) {
    return;
  }
  if (clicks === 0) {
    firstClick = card;
    clicks = 1;
  } else {
    clicks = 2;
    secondClick = card;
    timer = setInterval("check()", 1000)
  }
}
//when card is clicked it turns for a while




