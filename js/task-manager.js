//Function to calculate weekly goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    console.log("Checking status for: " + userName);

// Calculate weekly goal based on number of workdays (5) per week
let weeklyGoal = dailyGoal * 5;
let totalGoal = weeklyGoal + bonusTasks;

// Output results to web page
let output = "User: " + userName + "<br>Total Weekly Goal: " + totalGoal;
document.getElementById("goal-message").innerHTML = output;
}

// Get values from form to calculate weekly goal
document.getElementById("goal-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    let userName = document.getElementById("userName").value;
    let dailyGoal = Number(document.getElementById("dailyGoal").value);
    let bonusTasks = Number(document.getElementById("bonusTasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});
