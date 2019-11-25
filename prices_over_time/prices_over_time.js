function filter(json, key, value) {
  var result = [];
  json.forEach(function(val,idx,arr){
    if(val[key] == value){

      result.push(val)
    }
  })
  return result;
}

// Set the dimensions of the canvas / graph
var margin = {top: 25, right: 10, bottom: 200, left: 125},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var parseDate = d3.timeParse("%m/%d/%Y");

// Set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

function transition(path) {
    path.transition()
        .duration(60);
    }

// Define the axes
var xAxis = d3.axisBottom().scale(x)
    .ticks(20)
    .tickFormat(d3.timeFormat("%B %y"));


var yAxis = d3.axisLeft().scale(y)
    .ticks(5)
    .tickFormat(function(d){
         return '$' + d;
      });

// Define the line
var shopline = d3.line()
		.curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.price); });

// Adds the svg canvas
var svg = d3.select("#prices-over-time")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
var data;
// Get the data
d3.csv("prices_over_time/prices.csv", function(error, csv) {
  console.log(csv)

  csv.forEach(function(d) {
		d.price = +d.price;
    d.date = parseDate(d.date);
  });

	d3.select('#inds')
			.on("change", function () {
				var sect = document.getElementById("inds");
				var section = sect.options[sect.selectedIndex].value;

				data = filter(csv, 'drink', section);
        console.log(data)

	      //debugger

		    data.forEach(function(d) {
    			d.price = +d.price;
    			d.date = d.date;
    			d.active = true;
    		});


		    //debugger
				updateGraph(data);


				jQuery('h1.page-header').html(section);
			});

	// generate initial graph
	data = filter(csv, 'drink', 'drip');
	updateGraph(data);

});


function updateGraph(data) {


    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([d3.min(data, function(d) { return d.price; }), d3.max(data, function(d) { return d.price; })]);


    // Nest the entries by state
    dataNest = d3.nest()
        .key(function(d) {return d.shop;})
        .entries(data);


 		var result = dataNest.filter(function(val,idx, arr){
				  return $("." + val.key).attr("fill") != "#ccc"
				  // matching the data with selector status
				})


 		var shop = svg.selectAll(".line")
      .data(result, function(d){return d.key});

		shop.enter().append("path")
			.attr("class", "line")
      .attr("stroke", "#DCDCDC")
      .attr("fill", "none")
      .attr("stroke-width", 3)
      .call(transition)
      .on("mouseover", function(d) {
        d3.select(this)
        .transition()
          .attr("stroke-width", 7)
          .attr("stroke", "#00778B")
        })
      .on("mouseout", function(d) {
        d3.select(this)
          .transition()
            .attr("stroke-width", 3)
            .attr("stroke", "#DCDCDC")
      })

		shop.transition()
			.attr("id", function(d){ return 'tag'+d.key.replace(/\s+/g, '');}) // assign ID
			.attr("d", function(d){

				return shopline(d.values)
			});

		shop.exit().remove();
    //
		// var legend = d3.select("#legend")
		// 	.selectAll("text")
		// 	.data(dataNest, function(d){return d.key});
    //
		// //checkboxes
		// legend.enter().append("rect")
		//   .attr("width", 10)
		//   .attr("height", 10)
		//   .attr("x", 0)
		//   .attr("y", function (d, i) { return 0 +i*15; })  // spacing
		//   .attr("fill",function(d) {
		//     return color(d.key);
    //
		//   })
		//   .attr("class", function(d,i){return "legendcheckbox " + d.key})
		// 	.on("click", function(d){
		// 	  d.active = !d.active;
    //
		// 	  d3.select(this).attr("fill", function(d){
		// 	    if(d3.select(this).attr("fill")  == "#ccc"){
		// 	      return color(d.key);
		// 	    }else {
		// 	      return "#ccc";
		// 	    }
		// 	  })
    //
    //
		// 	 var result = dataNest.filter(function(val,idx, arr){
    //      return $("." + val.key).attr("fill") != "#ccc"
    //    // matching the data with selector status
    //   })
    //
    //    // Hide or show the lines based on the ID
    //    svg.selectAll(".line").data(result, function(d){return d.key})
    //      .enter()
    //      .append("path")
    //      .attr("class", "line")
    //      .style("stroke", function(d,i) { return d.color = color(d.key); })
    //     .attr("d", function(d){
    //             return shopline(d.values);
    //      });
    //
    //   svg.selectAll(".line").data(result, function(d){return d.key}).exit().remove()
    //
		// 	})
    //
    // // Add the Legend text
    // legend.enter().append("text")
    //   .attr("x", 15)
    //   .attr("y", function(d,i){return 10 +i*15;})
    //   .attr("class", "legend");
    //
		// legend.transition()
    //   .style("fill", "#777" )
    //   .text(function(d){return d.key;});
    //
		// legend.exit().remove();

		svg.selectAll(".axis").remove();

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
            .attr("y", "10")
            .attr("x", "-5")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-40)");

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
};

function clearAll(){
  d3.selectAll(".line")
	.transition().duration(100)
			.attr("d", function(d){
        return null;
      });
  // d3.select("#legend").selectAll("rect")
  // .transition().duration(100)
  //     .attr("fill", "#ccc");
};

function showAll(){
  d3.selectAll(".line")
	.transition().duration(100)
			.attr("d", function(d){
        return shopline(d.values);
      });
  // d3.select("#legend").selectAll("rect")
  // .attr("fill",function(d) {
  //   if (d.active == true){
  //      return color(d.key);
  //    }
  //  })
};
