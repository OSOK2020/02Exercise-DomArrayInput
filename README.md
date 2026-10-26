# 04Exercise-DomArrayInput
# As part of the Frontend 2 course and Fullstack Webbdevelopement Open Source program this was teh fourth exercise from lecture 2 (week 1).

Student Data Filter

A JavaScript application that allows teachers to filter and display student information based on city, education program, and year group. Access to the data is restricted by requiring the user to confirm they are a teacher before the data can be displayed.

Features
Display a list of students with:
Name
Education
City
Year
Filter students by:
City
Education program
Year
Combine multiple filters
Show all cities or all educations
Teacher authorization checkbox before displaying data
Dataset

The application uses a predefined array of student objects:

{
  namn: "Bat von Man",
  utbildning: "Frontend",
  stad: "Malmö",
  år: 1
}

Available Educations
Frontend
Backend
Fullstack
Available Cities
Malmö
Stockholm
Göteborg
Lund
Uppsala
Helsingborg
Application Flow
User selects one or more cities.
User selects an education program.
User optionally enters a year number.
User confirms they are a teacher.
User clicks the Get Data button.
Matching students are rendered in the browser.
Functions
renderData(array)

Responsible for displaying student data on the page.

Behavior:

Clears previous results.
Verifies that the teacher checkbox is checked.
Creates an <li> element for each student.
Displays all student information.
Shows an alert if teacher authorization is missing.
filterYears()

Filters data based on the selected year.

Returns:

A filtered array of students matching the selected year.
All students if no year is selected.

Example:

filterYears();

filterData()

Main filtering function.

Handles:

City filtering
Education filtering
Combined city and education filtering
"All Cities" option
"All Education" option
Year filtering through filterYears()

Example:

filterData();

DOM Elements
Output Container
const render = document.querySelector("#render");


Used to display filtered students.

Button
const getData = document.querySelector("#getData");


Triggers the filtering process.

Teacher Checkbox
let teacherInput = document.querySelector(
  "input[type=checkbox][name=teacher]"
);


Required to access student data.

City Checkboxes
let selectCity = document.querySelectorAll(
  "input[type=checkbox][name=city]"
);


Allows selecting one or multiple cities.

Education Radio Buttons
let selectEducation = document.querySelectorAll(
  "input[type=radio][name=education]"
);


Allows selecting a single education type.

Year Input
const yearInput = document.getElementById("yearInput");


Used for filtering by year.

Event Listeners
Year Input
yearInput.addEventListener("change", () => {
  console.log(yearInput.value);
});


Logs the selected year whenever it changes.

Get Data Button
getData.addEventListener("click", () => {
  filterData();
});


Starts the filtering process.

Example Usage

Filter all Frontend students in Malmö from year 1:

Teacher checkbox ✅
City: Malmö ✅
Education: Frontend ✅
Year: 1 ✅

Output:

Bat von Man
Iron Dev
Vision Array

Future Improvements
Add search by name.
Sort results alphabetically.
Replace alert messages with inline validation.
Add reset filters button.
Allow filtering by multiple education programs.
Display number of matching students.
Improve accessibility and UI styling.
Technologies Used
HTML
CSS
JavaScript (Vanilla JS)
Author

Created as a JavaScript filtering exercise demonstrating:

DOM manipulation
Event handling
Array filtering
Conditional logic
Dynamic rendering of data in the browser.