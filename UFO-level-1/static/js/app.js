// from data.js
var tableData = data;

// Attach HTML table and add rows for UFO data
var tbody = d3.select("tbody");
console.log("Welcome to UFO data")

tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Listen for events and search date column for matches to user input

// Select the filter button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var userInput = inputElement.property("value");
  console.log(userInput);

  // Use the form input to filter the data by date
  var matchingResults = tableData.filter(sighting => sighting.datetime == userInput);

  // Show filtered results only in main table
  if (matchingResults.length == 0) {
      console.log(`No results for date ${userInput}`);
      tbody.html("");
      tbody.text(`There are no results for the date you entered - ${userInput}`);
    } else {
  tbody.html("");
  matchingResults.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
  });
}; 
};
