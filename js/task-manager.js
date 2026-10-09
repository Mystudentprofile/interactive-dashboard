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

// Array to keep track of all tasks the user adds
let myTasks = [];

// Create the unordered list that will hold the tasks
let taskUL = document.createElement("ul");
taskUL.id = "user-tasks";

// Add the new list inside the task-list div
document.getElementById("task-list").appendChild(taskUL);

// Add a task when the user clicks the Add Task button
document.getElementById("add-task").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the task the user typed and store it in the array
    let taskName = document.getElementById("task-name").value;
    myTasks.push(taskName);

    // Create a list item and put the task text inside it
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(taskName));

    // Add the list item to the unordered list
    taskUL.appendChild(listItem);

    // Clear the input field so the user can type the next task
    document.getElementById("task-name").value = "";
});