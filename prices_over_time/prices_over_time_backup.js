
// set the dimensions and margins of the graph
var margin = {top: 60, right: 10, bottom: 75, left: 50},
    width = 400 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%m/%d/%Y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline1 = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.monks); });

// define the 2nd line
var valueline2 = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.centralp); });
// define the 2nd line
var valueline3 = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.lukes); });
// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#prices-over-time").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

function transition(path) {
    path.transition()
        .duration(2000);
    }


// Get the data
d3.csv("prices_over_time/prices.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.monks    = +d.monks;
      d.centralp = +d.centralp;
      d.lukes    = +d.lukes;
  });

  console.log(data);
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([d3.min(data, function(d) {
              return Math.min(d.monks, d.centralp, d.lukes)  - .3; }),
            d3.max(data, function(d) {
              return Math.max(d.monks, d.centralp, d.lukes)  + .3; }) ]);

  // Add the valueline path.

  // // Add the valueline path.
  fields = [valueline2, valueline3, valueline1]
  for (var i=0; i<fields.length; i++){
    if (i != 2){
      color = "#DCDCDC"
    }
    else{
      color = "purple"
    }
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("stroke-width", 3)
        .style("stroke", color)
        .style("fill", "none")
        .attr("d", fields[i])
        .call(transition)
        .on("mouseover", function(d) {
          d3.select(this)
          .transition()
            .attr("stroke-width", 7);

          })
        .on("mouseout", function(d) {
          d3.select(this)
          .transition()
            .attr("stroke-width", 3);
          })
        };


  // Add the X Axis
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%B  %y")).ticks(20))
      .selectAll("text")
          .attr("y", "10")
          .attr("x", "-5")
          .attr("text-anchor", "end")
          .attr("transform", "rotate(-40)");

  // Add the Y Axis
  svg.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).ticks(7)
        .tickFormat(function(d){
           return '$' + d;
        }));



});
