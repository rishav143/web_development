var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if(!started) {
        $("#level-title").text("level" + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswers(userClickPattern.length - 1);
});

function checkAnswers(currentLevel) {
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        if(userClickPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, please press any key to restart!");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userClickPattern = [];
    level++;
    $("#level-title").text("level" + level);
    var randomNumber  = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


    playSound(randomChosenColour);
}


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
}