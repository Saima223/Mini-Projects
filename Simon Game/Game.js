const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Use jQuery to select the button with the same id as the randomChosenColour
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // Play the sound for the selected button
    makeSound(randomChosenColour);

    return randomChosenColour;
}

function makeSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Start the game only after the user interacts with the page
$(document).keypress(function() {
    nextSequence();
});
