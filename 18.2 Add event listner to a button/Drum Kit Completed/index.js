var numberOfdrumButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfdrumButton; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function () {
      this.style.color = "white";
  });

}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();