// from data.js
var tableData = data;

// Attach HTML table and add rows for UFO data
console.log(data);
var tbody = d3.select("tbody");

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

