// the dataset, a JavaScript array:
var dataset = [7824, 2847, 4576, 5673, 2289];
var regioner = ["Hovedstaden", "Sjælland", "Syddanmark", "Midtjylland", "Nordjylland"];
var element = document.getElementById("d3_svg_bar");


//Width and height of the SVG chart
var w = 800;
var h = 600;
//Create SVG element:
var svg = d3.select("#d3_svg_bar")
 .append("svg") // creates an svg element in the HTML document
 .attr("width", w) // width of the entire svg graphic
 .attr("height", h); // height of the entire svg graphic

svg.selectAll("rect") // This selects all d3 rect elements
 /* Other basic d3 shapes:
 circle, line, ellipse, path, polygon, text, polyline
 */
 .data(dataset) // “bind” your data to the type of DOM element you specified in selectAll()
 .enter() // the .enter() command matches the selectAll statement with the number of elements in the array/object
 .append("rect") // The .append() command determines which of the SVG basic shapes you’ll use. 
 .attr("x", function(d, i) { // accessing the attribute x (-axis)
 return i * (w / dataset.length);
 })
 .attr("y", function(d) {
 return h - (d / 15); //Height minus data value: “the top” of each bar in relationship to the top of the SVG!
 })
 .attr("width", 60) // fixed width of all bars
 .attr("height", function(d) {
 return d / 15;
 })
.attr("class", "bars")


///////////////////////
// Some D3 styling: //
/////////////////////

// 1. Adding the data as text to the bars
svg.selectAll("text")
 .data(dataset)
 .enter()
 .append("text")
 .text(function(d) {
 return d;
 })
 .attr("text-anchor", "middle")
 .attr("x", function(d, i) {
 return i * (w / dataset.length) + (w / dataset.length) / 5.5;
 })
 .attr("y", function(d) {
 return h - (d / 15) + 30;
 })
 .attr("font-family", "montserrat", "sans-serif")
 .attr("font-size", "20px")
 .attr("fill", "white");


//tilføjer regiontekst

svg.selectAll("text")
 .data(regioner)
 .enter()
 .append("text")
 .text(function(d) {
 return d;
 })
 .attr("text-anchor", "middle")
 .attr("x", function(d, i) {
 return i * (w / regioner.length) + (w / regioner.length) / 5.5;
 })
 .attr("y", function(d) {
 return h - (d / 15) + 80;
 })
 .attr("font-family", "montserrat", "sans-serif")
 .attr("font-size", "20px")
 .attr("fill", "white");
//tilføjer farver til søjler 

//d3.selectAll(".barfarve")
//	.html(function(d, i){
//	if (i==0){
//		return '<strong>' + d + '</strong>';
//	}
//	return '<strong>' + d + '</strong>';
//})


