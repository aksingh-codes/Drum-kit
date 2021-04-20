var drumArray = document.querySelectorAll(".drum");


//detect clicks
for (var i = 0; i < drumArray.length; i++) {
  drumArray[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSounds(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//detect keydown
document.addEventListener("keydown", function(event) {
  var keydown = event.key;
  console.log(event);
  makeSounds(keydown);
  buttonAnimation(keydown);
});


//make sound

function makeSounds(key) {

  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
     activeButton.classList.remove("pressed");
   }, 100);
}
// document.querySelectorAll(".drum")[0].
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
