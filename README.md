# Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add Add a weekly task goal calculator.
## Weekly Task Goals
This feature calculates a user's task targets and weekly goals and bonus tasks.
## Imperial Metric Converter
This feature allows a user to convert metric to imperial units and vice versa, ie inch to centimeter, foot to centimeter, yard to meter, mile to kilometer, and vice versa.
## Logic and Pseudocode
BEGIN
    INPUT value
    INPUT conversionType

    IF value is not a number THEN
        DISPLAY "Please enter a numeric value"
    ELSE
        SET isValid = TRUE

        IF conversionType = "inch to centimeter" THEN
            SET factor = 2.54
            SET unit = "centimeters"
        ELSE IF conversionType = "foot to centimeter" THEN
            SET factor = 30.48
            SET unit = "centimeters"
        ELSE IF conversionType = "yard to meter" THEN
            SET factor = 0.91
            SET unit = "meters"
        ELSE IF conversionType = "mile to kilometer" THEN
            SET factor = 1.61
            SET unit = "kilometers"
        ELSE IF conversionType = "centimeter to inch" THEN
            SET factor = 0.39
            SET unit = "inches"
        ELSE IF conversionType = "centimeter to foot" THEN
            SET factor = 0.0328
            SET unit = "feet"
        ELSE IF conversionType = "meter to yard" THEN
            SET factor = 1.09
            SET unit = "yards"
        ELSE IF conversionType = "kilometer to mile" THEN
            SET factor = 0.62
            SET unit = "miles"
        ELSE
            SET isValid = FALSE
            DISPLAY "Please select a valid conversion"
        END IF

        IF isValid = TRUE THEN
            SET result = value * factor
            DISPLAY value + " converts to " + result + " " + unit
        END IF
    END IF
END