// JavaScript Document
//søjlediagram drenge 

// the dataset, a JavaScript array:
var datasetdrenge = [7780, 3085, 4812, 5945, 2478];
var elementdrenge = document.getElementById("d3_svg_bar_drenge");


//Width and height of the SVG chart
var w = 800;
var h = 600;
//Create SVG element:
var svgdrenge = d3.select("#d3_svg_bar_drenge")
 .append("svg") // creates an svg element in the HTML document
 .attr("width", w) // width of the entire svg graphic
 .attr("height", h); // height of the entire svg graphic

svgdrenge.selectAll("rect") // This selects all d3 rect elements
 /* Other basic d3 shapes:
 circle, line, ellipse, path, polygon, text, polyline
 */
 .data(datasetdrenge) // “bind” your data to the type of DOM element you specified in selectAll()
 .enter() // the .enter() command matches the selectAll statement with the number of elements in the array/object
 .append("rect") // The .append() command determines which of the SVG basic shapes you’ll use. 
 .attr("x", function(d, i) { // accessing the attribute x (-axis)
 return i * (w / datasetdrenge.length);
 })
 .attr("y", function(d) {
 return h - (d / 15); //Height minus data value: “the top” of each bar in relationship to the top of the SVG!
 })
 .attr("width", 60) // fixed width of all bars
 .attr("height", function(d) {
 return d / 15;
 })
.attr("class", "barsdrenge")


///////////////////////
// Some D3 styling: //
/////////////////////

// 1. Adding the data as text to the bars
svgdrenge.selectAll("text")
 .data(datasetdrenge)
 .enter()
 .append("text")
 .text(function(d) {
 return d;
 })
 .attr("text-anchor", "middle")
 .attr("x", function(d, i) {
 return i * (w / datasetdrenge.length) + (w / datasetdrenge.length) / 5.5;
 })
 .attr("y", function(d) {
 return h - (d / 15) + 30;
 })
 .attr("font-family", "montserrat", "sans-serif")
 .attr("font-size", "20px")
 .attr("fill", "white");