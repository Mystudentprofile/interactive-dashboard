// Run the conversion when the user clicks the Convert button
document.getElementById("convert-btn").addEventListener("click", function (event) {
    event.preventDefault();

    // Get the value from the number field and convert it to a numeric value
    let value = document.getElementById("convertValue").value;
    value = parseFloat(value);

    // Get the selected conversion type from the dropdown
    let selectedIndex = document.getElementById("conversionType").selectedIndex;
    let conversionType = document.getElementsByTagName("option")[selectedIndex].value;

    // Check for a valid number before performing the conversion
    if (isNaN(value)) {
        document.getElementById("convert-result").innerHTML = "Please enter a numeric value";
    } else {
        let isValid = true;
        let factor;
        let unit;

        if (conversionType === "inch to centimeter") {
            factor = 2.54;
            unit = "centimeters";
        } else if (conversionType === "foot to centimeter") {
            factor = 30.48;
            unit = "centimeters";
        } else if (conversionType === "yard to meter") {
            factor = 0.91;
            unit = "meters";
        } else if (conversionType === "mile to kilometer") {
            factor = 1.61;
            unit = "kilometers";
        } else if (conversionType === "centimeter to inch") {
            factor = 0.39;
            unit = "inches";
        } else if (conversionType === "centimeter to foot") {
            factor = 0.0328;
            unit = "feet";
        } else if (conversionType === "meter to yard") {
            factor = 1.09;
            unit = "yards";
        } else if (conversionType === "kilometer to mile") {
            factor = 0.62;
            unit = "miles";
        } else {
            isValid = false;
            document.getElementById("convert-result").innerHTML = "Please select a valid conversion";
        }

        if (isValid) {
            let result = value * factor;
            document.getElementById("convert-result").innerHTML = value + " converts to " + result.toFixed(2) + " " + unit;
        }
    }
});