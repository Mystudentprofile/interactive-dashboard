// Digital Clock: displays the current time and date, updated every second.

// Reads the current time and writes it to the page
function digitalClock() {
    // Create a Date object holding this exact moment
    let now = new Date();

    // Retrieve the hours, minutes, and seconds from the current time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Track whether it is morning
    let session = "AM";

    // Switch to PM once the hour reaches 12
    if (hours >= 12) {
        session = "PM";
    }

    // Convert from 24-hour to 12-hour time
    if (hours > 12) {
        hours = hours - 12;
    }

    // Add a leading zero to any value below 10
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Build the time string
    let time = hours + ":" + minutes + ":" + seconds + " " + session;

    // Get a readable calendar date
    let date = now.toLocaleDateString();

    // Write both to the page
    document.getElementById("clock-face").innerHTML = time;
    document.getElementById("calendar-date").innerHTML = date;
}

// Show the time immediately, then update it every second
digitalClock();
setInterval(digitalClock, 1000);