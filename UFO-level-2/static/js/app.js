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

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element, property, and get the raw HTML node
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value").toLowerCase();
  var inputState = d3.select("#state").property("value").toLowerCase();
  var inputCountry = d3.select("#country").property("value").toLowerCase();
  var inputShape = d3.select("#shape").property("value").toLowerCase();

  // console.log(inputDate,inputCity,inputState,inputCountry,inputShape);

  // Use the form input to filter the data by 5 fields
  filteredData = tableData;

  if (inputDate) {
    filteredData = filteredData.filter(sighting => sighting.datetime == inputDate);
  }

  if (inputCity) {
    filteredData = filteredData.filter(sighting => sighting.city == inputCity);
  }

  if (inputState) {
    filteredData = filteredData.filter(sighting => sighting.state == inputState);
  }

  if (inputCountry) {
    filteredData = filteredData.filter(sighting => sighting.country == inputCountry);
  }

  if (inputShape) {
    filteredData = filteredData.filter(sighting => sighting.shape == inputShape);
  }

  // Show filtered results only in main table
  if (filteredData.length == 0) {
      // console.log(`No results for the parameters you have provided - ${inputDate}, ${inputCity}, ${inputState}, ${inputCountry}, ${inputShape}.`);
      tbody.html("");
      tbody.text(`There are no results for the parameters you have provided - ${inputDate}, ${inputCity}, ${inputState}, ${inputCountry}, ${inputShape}.`);
    } else {
  tbody.html("");
  filteredData.forEach((report) => {
    var row = tbody.append('tr');
    Object.entries(report).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
  });
};
};