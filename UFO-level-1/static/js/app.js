// from data.js
var tableData = data;

// set more some variables
var tb= d3.select("tbody");
var button = d3.select("#filter-btn");
var date = d3.select("#datetime");

// loop thru to get the values for the columns & append the rows
tableData.forEach(function(ufosighting) {
    var row = tb.append("tr");

// Use `Object.entries` and `forEach` to iterate through keys and values
    Object.entries(ufosighting).forEach(function([key, value]) {
      // append cells to the rows for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Button
//Variables
button.on("click", function() {
    tb.html("");

    // Get the value property of the inputs
    var Value = date.property("value");
     // Filter Data to datetime equal to the value
    var filteredData = tableData.filter(sighting => sighting.datetime === Value);
// apply to the table data code
    filteredData.forEach(function(filtersearch) {
        var row = tb.append("tr");
    Object.entries(filtersearch).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});
});