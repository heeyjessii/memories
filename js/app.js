function flip(id) {
  document.getElementById(id).style.transform = 'rotateY(180deg)';
  if(document.getElementById(id).style.transform === 'rotateY(180deg)'){
    setTimeout(function(){
      document.getElementById(id).style.transform = "rotateY(0deg)";
    }, 1000);
  }
}




