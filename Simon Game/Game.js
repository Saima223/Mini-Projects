const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Use jQuery to select the button with the same id as the randomChosenColour
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // Play the sound for the selected button
    playSound(randomChosenColour);

    return randomChosenColour;
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    playSound(userChosenColour); 
    userClickedPattern.push(userChosenColour);
   // console.log(userClickedPattern);
});
