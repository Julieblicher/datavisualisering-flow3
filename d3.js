// JavaScript Document


var w = 600;
var h = 500;
var m = 200;

// creating the SVG and defining the scales for our bar chart
var svg = d3.select("#bar-chart")
 .append("svg")
 .attr("width", w) // width of the entire svg graphic
 .attr("height", h), 
 width = w - m,
 height = h - m;

var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
 yScale = d3.scaleLinear().range ([height, 0]);
var g = svg.append("g")
 .attr("transform", "translate(" + 100 + "," + 100 + ")");


d3.json("d3.json", function(data) { // loading the data with the d3.json function 

 console.log(data + "hallo"); 

// d3.json function end:
});