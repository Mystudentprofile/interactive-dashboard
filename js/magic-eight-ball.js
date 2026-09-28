// This script simulates a Magic Eight Ball that provides random answers to yes/no questions.

// Array of possible answers the Eight Ball can give
let answers = [
    "It is certain",
    "Ask again later",
    "All signs point to yes",
    "All signs point to no",
    "Very doubtful",
    "Without a doubt",
    "Better not tell you now",
    "My sources say no"
];

// Picks a random answer and shows it inside the circle div
function displayAnswer() {
    let randomIndex = Math.floor(Math.random() * answers.length);

    // Put the chosen answer in the circle and make the circle visible
    document.getElementById("circle").innerHTML = answers[randomIndex];
    document.getElementById("circle").style.display = "flex";
}

// Show an answer when the user presses down on the ball image
document.getElementById("ball").addEventListener("mousedown", function () {
    let question = document.getElementById("question").value;

    // Check that the user actually typed a question first
    if (question === "") {
        alert("Please enter a question before clicking the Eight Ball.");
    } else {
        displayAnswer();
    }
});

// Hide the answer when the user clicks the reset button
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("circle").style.display = "none";
});
