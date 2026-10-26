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

// Array of task objects
let tasks = [];

// Variable to keep track of the next task ID
let nextId = 1;

// Create the unordered list that will hold the tasks
let taskUL = document.createElement("ul");
taskUL.id = "user-tasks";
document.getElementById("task-list").appendChild(taskUL);

// Applies styling to a list item based on the task's properties
function applyStyles(listItem, task) {
    // Style based on priority
    if (task.priority === "High") {
        listItem.style.borderLeft = "5px solid #c0392b";
    } else if (task.priority === "Medium") {
        listItem.style.borderLeft = "5px solid #e67e22";
    } else {
        listItem.style.borderLeft = "5px solid #27ae60";
    }

    // Important tasks are highlighted in red
    if (task.isImportant) {
        listItem.style.color = "red";
        listItem.style.fontWeight = "bold";
    } else {
        listItem.style.color = "#1f2933";
        listItem.style.fontWeight = "normal";
    }

    // Completed tasks get a strikethrough
    if (task.isCompleted) {
        listItem.style.textDecoration = "line-through";
    } else {
        listItem.style.textDecoration = "none";
    }
}

// Marks a task as complete and restyles it
function markComplete(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].isCompleted = true;
            applyStyles(document.getElementById("task-" + id), tasks[i]);
        }
    }

    console.log(JSON.stringify(tasks));
}

// Builds the DOM nodes for one task and adds them to the list
function displayTask(task) {
    // The list item that will be given an id so it can be found later
    let listItem = document.createElement("li");
    listItem.id = "task-" + task.id;
    listItem.style.padding = "0.5rem";
    listItem.style.marginBottom = "0.5rem";

    // The text of the task
    let taskText = document.createElement("span");
    taskText.appendChild(document.createTextNode(task.name + " — " + task.priority));

    // The button that marks this task complete
    let doneButton = document.createElement("button");
    doneButton.appendChild(document.createTextNode("Mark Complete"));
    doneButton.type = "button";
    doneButton.addEventListener("click", function () {
        markComplete(task.id);
    });

    listItem.appendChild(taskText);
    listItem.appendChild(doneButton);

    applyStyles(listItem, task);
    taskUL.appendChild(listItem);
}

// Creates a new task object from the form and adds it to the list
function addTask() {
    let taskName = document.getElementById("task-name").value;

    // Build the task object
    let task = {
        id: nextId,
        name: taskName,
        priority: document.getElementById("task-priority").value,
        isImportant: document.getElementById("task-important").checked,
        isCompleted: false
    };

    nextId++;
    tasks.push(task);
    displayTask(task);

    console.log(JSON.stringify(tasks));

    // Clear the form for the next task
    document.getElementById("task-name").value = "";
    document.getElementById("task-important").checked = false;
}

// Empties the array and removes every list item from the page
function deleteTaskList() {
    tasks = [];
    nextId = 1;

    while (taskUL.firstChild) {
        taskUL.removeChild(taskUL.firstChild);
    }

    console.log(JSON.stringify(tasks));
}

// Add a task when the user submits the form
document.getElementById("add-task").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    addTask();
});

// Delete the whole list when the user clicks Delete List
document.getElementById("delete-list").addEventListener("click", function () {
    deleteTaskList();
});