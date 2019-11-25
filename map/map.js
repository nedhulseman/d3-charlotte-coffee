
var ss = 300 // svg size
var cs = ss /15 // cell size
var lw = 15 //line width
var margin = 3
var middle = ss/2 + cs

var i277 =      [{ "x": margin+lw, "y": lw},
                 { "x": margin+lw+(cs/2), "y": cs*4},
                 { "x": margin+lw+(cs/2),  "y": ss-(4*cs)},
                 { "x": cs+(lw*3)+lw+(cs/2),  "y": ss-cs},
                 { "x":ss-2*cs-3*lw, "y": ss-cs},
                 { "x": ss-margin-lw,  "y": ss-(4*cs)},
                 { "x":ss-margin-lw+.8*margin, "y":lw}];



var stonewall = [ { "x": middle-5.5*cs, "y":lw+2*cs},
                 { "x": middle-5.5*cs, "y":ss-2.2*lw}];

var mlk =    [ { "x": middle-4*cs, "y":lw},
                { "x": middle-4*cs, "y":ss-1.5*lw}];

var third =    [ { "x": middle-3*cs, "y":lw+2*cs},
                  { "x": middle-3*cs, "y":ss-lw}];

var fourth =    [ { "x": middle-2*cs, "y":lw},
                  { "x": middle-2*cs, "y":ss-lw}];

var trade =    [ { "x": middle-cs, "y":lw},
                 { "x": middle-cs, "y":ss-lw}];

var fifth =    [ { "x":  middle,   "y": lw},
                { "x":  middle,  "y": middle-2.5*cs},
                { "x":  middle+cs*.75, "y": middle -1.25*cs},
                { "x": middle+cs*.75,  "y": middle -.50*cs},
                { "x":middle, "y":middle+.75*cs},
                { "x":middle, "y":ss-lw}];


var sixth =    [ { "x": middle+1.5*cs, "y":lw},
                 { "x": middle+1.5*cs, "y":ss-lw}];

var seventh =    [ { "x": middle+2.5*cs, "y":lw},
                { "x": middle+2.5*cs, "y":ss-1.4*lw}];

var eighth =    [ { "x": middle+3.5*cs, "y":lw},
                 { "x": middle+3.5*cs, "y":ss-1.9*lw}];

var ninth =    [ { "x": middle+4.5*cs, "y":lw},
                { "x": middle+4.5*cs, "y":ss-2.7*lw}];



var graham =    [{ "x": 1.5*lw+margin, "y":lw+2*cs},
                { "x": middle-5.5*cs, "y":lw+2*cs},
                { "x": middle-4*cs, "y":lw},
                { "x": ss-lw+margin, "y":lw}];

var mint =    [ { "x":  middle-5.5*cs, "y":lw+2*cs},
                { "x": ss-lw+margin, "y":lw+2*cs}];

var church =    [ { "x":  cs+margin*2, "y":middle - 4.5*cs},
               { "x": ss-lw+margin, "y":middle - 4.5*cs}];

var tryon =    [ { "x":  cs+2*margin, "y":middle - 3.5*cs},
               { "x": ss-lw+margin, "y":middle - 3.5*cs}];

var college =    [ { "x":  cs+margin, "y":middle - 2.5*cs},
               { "x": ss-lw+margin, "y":middle - 2.5*cs}];

var sbrevard =  [ { "x":  .80*cs+2*margin, "y":middle-cs},
               { "x": trade[0]["x"], "y":middle-cs}];
var nbrevard =  [ { "x":  fifth[3]["x"], "y": middle -cs},
               { "x": ss-lw+margin, "y": middle -cs}];

var caldwell =  [ { "x":  .8*cs+2*margin, "y":fifth[4]["y"]-.75*cs},
               { "x": ss-lw+margin, "y":fifth[4]["y"]-.75*cs}];

var davidson =  [ { "x":  .8*cs+2*margin, "y": middle + 1.5*cs},
                { "x": ss-lw+margin, "y":middle + 1.5*cs}];

var mcdowell =  [ { "x":  cs+.8*lw+margin*3, "y": middle + 4*cs},
                { "x": ss-lw-6*margin, "y":middle + 4*cs}];

var streets = [i277, graham, mlk, third, fourth, fifth, trade, sixth, seventh,
         eighth, ninth, stonewall,
         mint, church, tryon, college, sbrevard, nbrevard, caldwell,
          davidson, mcdowell]



var romare = [{"x": mlk[0]["x"] +7/2, "y": mint[0]["y"] +7/2}];
romare[0]["width"] = third[0]["x"]-romare[0]["x"] - 7/2;
romare[0]["height"] = church[0]["y"]-romare[0]["y"] - 7/2;

var fourthWard = [{"x": sixth[0]["x"] +7/2 , "y": mint[0]["y"] +7/2 }];
fourthWard[0]["width"] = eighth[0]["x"]-fourthWard[0]["x"] - 7/2 ;
fourthWard[0]["height"] = church[0]["y"]-fourthWard[0]["y"] - 7/2 ;

var firstWard1 = [{"x": seventh[0]["x"] +7/2, "y": college[0]["y"] +7/2 +cs/2 }];
firstWard1[0]["width"] = eighth[0]["x"]-firstWard1[0]["x"] - 7/2;
firstWard1[0]["height"] = nbrevard[0]["y"]-firstWard1[0]["y"] - 7/2;

var firstWard2 = [{"x": eighth[0]["x"] +7/2 , "y": college[0]["y"] +7/2 +cs/2}];
firstWard2[0]["width"] = ninth[0]["x"]-firstWard2[0]["x"] - 7/2 ;
firstWard2[0]["height"] = nbrevard[0]["y"]-firstWard2[0]["y"] - 7/2;

var parks = [romare[0], fourthWard[0], firstWard1[0], firstWard2[0]]

var radius = 7
var radiusOnMouse = 15
var offStreet = 5
var color = "#1D1160"
var qcgrounds = {"x":ninth[0].x +offStreet, "y":mint[0].y +offStreet, "name":"Queen City Grounds"}
var caribou = {"x":trade[0].x +offStreet, "y":tryon[0].y +offStreet, "name":"Caribou Coffee"}
var parliament = {"x":third[0].x -offStreet, "y":tryon[0].y -offStreet, "name":"Parliament Coffee"}
var starbucks = {"x":trade[0].x -offStreet, "y":tryon[0].y -offStreet, "name":"Starbucks Coffee"}
var notJustCoffee = {"x":sixth[0].x +offStreet, "y":college[0].y +offStreet, "name":"Not Just Coffee"}
var coffeeShops = [qcgrounds, caribou, parliament, starbucks, notJustCoffee]



function fillTable(data, table){
  prices = [data.drip, data.espr, data.latte, data.v_latte]
  for (var i=0; i<table.length; i++){
    table[i].price = prices[i];
  };
}
function clearTable(data, table){

  for (var i=0; i<table.length; i++){
    table[i].price = "";
  };
}




d3.csv("menu-prices.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.coffee_shop =  d.coffee_shop;
      d.drip        =  d.drip;
      d.latte       =  d.latte;
      d.v_latte     =  d.v_latte;
      d.espr        =  d.espr;
  });

  for (var i=0; i<data.length; i++){
    data[i].x = coffeeShops[i].x;
    data[i].y = coffeeShops[i].y;
    data[i].name = coffeeShops[i].name;
    };
  console.log(data)


  var table = [
    {"drink" : "Drip",     "price": "1"   },
    {"drink" : "Espresso", "price": "1"   },
    {"drink" : "Latte",    "price": "1"  },
    {"drink" : "V. Latte", "price": "1"},
  ];
  var shopName = document.getElementById("shop-name");
  var drip = document.getElementById("drip");
  var espr = document.getElementById("espr");
  var latte = document.getElementById("latte");
  var vlatte = document.getElementById("vlatte");



  //This is the accessor function we talked about above
  var lineFunction = d3.line()
         .x(function(d) { return d.x; })
         .y(function(d) { return d.y; })
          .curve(d3.curveCardinal);


  //The SVG Container
  var svgContainer = d3.select("#map").append("svg")
          .attr("width", ss+50)
          .attr("height", ss+50);


  //The line SVG Path we draw
  for (var i=0; i<streets.length; i++){
     svgContainer.append("path")
            .attr("class", "streets")
            .attr("d", lineFunction(streets[i]))
            .attr("stroke", "white")
            .attr("fill", "white");
  }


  for (var i=0; i<parks.length; i++){
    svgContainer.append("rect")
      .attr("x", parks[i].x)
      .attr("y", parks[i].y)
      .attr("width", parks[i].width)
      .attr("height", parks[i].height)
      .attr("fill", "#659D32");
  }



  for (var i=0; i<data.length; i++){
    svgContainer.append("circle")
      .attr("cx", data[i].x)
      .attr("cy", data[i].y)
      .attr("r", radius)
      .attr("fill", color)
      .data([data[i]])

      .on("mouseover", function(d) {
        d3.select(this)
        .transition()
          .attr("r", radiusOnMouse);
        console.log(d.name);
        console.log(d.drip);
        shopName.innerHTML = d.name;
        drip.innerHTML = d.drip;
        espr.innerHTML = d.espr;
        latte.innerHTML = d.latte;
        vlatte.innerHTML = d.v_latte;
        })
      .on("mouseout", function(d) {
        d3.select(this)
        .transition()
          .attr("r", radius);
        shopName.innerHTML = "";
        drip.innerHTML = "";
        espr.innerHTML = "";
        latte.innerHTML = "";
        vlatte.innerHTML = "";
    });
  }
  svgContainer.attr("transform-origin", "135 250")
              .attr("transform", "translate(150, 20) rotate(-45,   0, 0)");

});
