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

/*let firstDays = new Date().getDate()

if(firstDays < 16)(
    document.write("First fifteen days of the month")
)
else(document.write("Last days of the month"))

console.log(firstDays);*/



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

/*let hours = new Date().getHours

// Condition
if(hours > 12){
    alert("It's AM")
}
else(alert("It's PM"))*/



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

// Current Time
/*let timeNow = new Date()

// Past ramadan
let pastRamadan = new Date("18 june 2015")

// Current time milliseconds
let currentMilliSec = timeNow.getTime()

// Ramadan past millisec
let pastRamadanMilli = pastRamadan.getTime()

// Getting difference
let differencePast = currentMilliSec - pastRamadanMilli

// Getting days
let pastDays = Math.round((differencePast / (1000 * 60 * 60 * 24)))

document.write("<h4>Ramadan(June 18, 2015) Time:</h4>" + "<br/>" + pastRamadan + "<h4>Today Time:</h4>" + "<br/>" + timeNow +
"<h4>Days Passed from Ramadan(June 18, 2015) Today:</h4>" + "<br/>" + pastDays)*/



// QUESTION 10
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// ANSWER

/*let todaySec = new Date()

let todayMilliSec = todaySec.getTime()

let yearAgo2015 = new Date("1 january 2015")

let yearAgoMilliSec = yearAgo2015.getTime()

let difference = todayMilliSec - yearAgoMilliSec

let secondsPassed = Math.round((difference / 1000))

document.write("<h4>Time Now:</h4>" + todaySec + "<br/>" + "<h4>Time on 1 january 2015:</h4>" + yearAgo2015 + 
"<h4>Seconds Passed Between in this Time:</h4>" + secondsPassed)*/



// QUESTION 11
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// ANSWER

/*let timeDate = new Date()

let timeToday = timeDate.getHours()

timeToday = timeToday - 1

timeDate.setHours(timeToday)

document.write("<h4>Current Time:</h4>" + "<br/>" + timeDate + "<h4>Hour Ago:</h4>" + "<br/>" + "1 hour ago it was " + timeDate)*/



// QUESTION 12
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// ANSWER

/*let todayTime = new Date()

let yearsAgo = todayTime.getFullYear()

// Subtract 100 from current year
yearsAgo = yearsAgo - 100

document.write("<h4>Years Ago:</h4>" + "<br/>" + "It was 100 years ago today is " + yearsAgo)*/



// QUESTION 13
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// ANSWER

// Getting user birthdate
/*let userBirthYear = prompt("Enter yor Bithdate \nLike that (Date Month Year)")

// Getting current year
let currentYear = new Date().getFullYear()

// Getting user birthyear
let userBirthdateYear = new Date(userBirthYear).getFullYear()

// Subtract current year to user birthyear
let userAge = currentYear - userBirthdateYear

document.write("<h4>Birthdate:</h4>" + userBirthYear + "<h4>Age:</h4>" + userAge)*/



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
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// ANSWER

// a. Customer Name
/*let customerName = prompt("Customer Name \nEnter your name")
// let customerName = prompt("Customer Name \nEnter your name")

// b. Current Month
let currentMonth = new Date().getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// c. Number of units
let  numOfUnits = 359

// d. Charges per unit
let charges = 24

// e. Net Amount Payable (within Due Date)
let amountPayable = numOfUnits * charges

// f. Late Payment Surcharge
let lateCharges = 450

// g. Gross Amount Payable (after Due Date)
let afterDueCharges = lateCharges + amountPayable

document.write("<h1>K-Electric Bill</h1>" + "<br/>" + "<h4>Customer Name:</h4>" + customerName + "<br/>" + "<h4>Current Month:</h4>"
+ months[currentMonth] + "<br/>" + "<h4>Number of Units:</h4>" + numOfUnits + "<br/>" + "<h4>Charges per Unit:</h4>" +
charges + "<h4>Amount Payable:</h4>" + amountPayable + "<br/>" + "<h4>Late Charges:</h4>" + lateCharges + "<br/>" + 
"<h4>Net Amount Payable (within Due Date)</h4>" + amountPayable + "<br/>" + "<h4>Gross Amount Payable (after Due Date)</h4>" + afterDueCharges)*/
