// QUESTION 1
// Write a program that displays current date and time in
// your browser.

// ANSWER

/*let currentTime = new Date()

document.write("<h4>Current Time:</h4>" + currentTime)*/

// QUESTION 2
// Write a program that alerts the current month in words.
// For example December.

// ANSWER

// Getting current date
/*let currentDate = new Date()

// Getting month from current date
let currentMonth = currentDate.getMonth()

// Months array
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

document.write("<h4>Current Month:</h4>" + months[currentMonth]);*/

// QUESTION 3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// ANSWER

// Getting current time
/*let currentDay = new Date()

// Getting current day
let day = currentDay.getDay()

// Days array
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Making copy
document.write("<h4>Day today:</h4>" + "Today is " + days[day].slice(0 ,3));*/


// QUESTION 4
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// ANSWER

// Getting current time
/*let currentDay = new Date()

// Getting current day
let dayToday = new Date(currentDay).getDay()

// Days array
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Making condition
if(dayToday === "Saturday" || dayToday === "Sunday"){
    alert("It's Fun day")
}
else(alert("It's not funday"))*/

// QUESTION 5
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// ANSWER



// QUESTION 6
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// ANSWER

/*let currentToday = new Date()

let millisecPassedSince = currentToday.getTime()

let minutesPassedSince = (millisecPassedSince / (1000 * 60))

document.write("<h4>Current Time:</h4>" + currentToday + "<h4>MilliSeconds Passed since Midnight, Jan 1, 1970:</h4>" + millisecPassedSince
+ "<h4>Minutes Passed since Midnight, Jan 1, 1970:</h4>" + minutesPassedSince) 

console.log(minutesPassedSince);*/


// QUESTION 7
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// ANSWER

// QUESTION 8
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// ANSWER

/*let todayDate = new Date()

let laterDate = new Date("31 December 2020")

document.write("<h4>Later Date:</h4>" + laterDate)*/


// QUESTION 9
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// ANSWER

// QUESTION 10
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// ANSWER

// QUESTION 11
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// ANSWER

// QUESTION 12
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// ANSWER

// QUESTION 13
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// ANSWER

// QUESTION 14
// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// ANSWER