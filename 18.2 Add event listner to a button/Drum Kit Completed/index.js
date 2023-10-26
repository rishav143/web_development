var numberOfdrumButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfdrumButton; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function () {
    alert("i got clicked");
  });

}