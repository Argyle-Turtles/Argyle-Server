import m, { prop } from 'mithril';
import Promise from 'bluebird';

import {Head, Spotify} from '../../components';

import d3 from 'd3';
//because d3, thats why
let i = -1;
//creates and appends graph
//append => element to append the graph to
//radius => array of radiussesese for circles
 export const init = (append,radius) => {
  //no dupicating graphs!
  d3.select("svg").remove();

  //scale from 1 to 8
  const yScale = d3.scale.linear()
                          //min and max number
                          .domain([0, 8])
                          //pixels the graph can render
                          .range([0, 255]);

  //should be length of graph/total songs on playlist
  const xScale = d3.scale.linear()
                          .domain([0, 8])
                          .range([0, 250]);

  // tick labels
  const ticks = ["10s","00s","90s","80s","70s","60s","50s","40s","30s"];

  const formatTicks = function(d) {
    return ticks[d % 9];      
  }     
  

  //creates axis with y scale
  const yAxis = d3.svg.axis().scale(yScale).tickFormat(formatTicks).innerTickSize(-260).orient("left");

  //function to extract data points from the data set
  const lineGen = d3.svg.line()
                  .x(function(d) {
                    return xScale(d.x);
                  })
                  .y(function(d) {
                    return yScale(d.y);
                  }).interpolate("cardinal");

	//The data for our line
  // y = 1 = 10s
  //y = 8 = 30s
 const data = [ { "x": 1,   "y": 5},  { "x": 2,  "y": 2},
                  { "x": 3,  "y": 1}, { "x": 4,  "y": 4},
                  { "x": 5,  "y": 5},  { "x": 6, "y": 6}];
                  //{"x": 7, "y": 8}];
 
console.log(d3.select(".graphSpace").style("width"));

//The SVG Container
const svgContainer = d3.select(append).append("svg")
                                    .attr("width", 250)
                                    .attr("height", 255);

// add y axis to the graph
const yAxisGroup = svgContainer.append("g").attr("class"," y axis").attr("transform", "translate(" + 30 + ","+ 10 +")").call(yAxis);

//move the y axis tick marks 
yAxisGroup.selectAll(".tick line").attr("transform", "translate(-30,10)");


const pathContainers = svgContainer.selectAll('g.line').data(data);

//console.log(pathContainers);




//The line SVG Path we draw
const lineGraph = svgContainer.append("path")
                            .attr('d', lineGen(data))
                            .attr("class", "line")
                            .attr("transform", "translate(15,0)")
                            .attr("stroke", "#FFFFFF")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

  const getRadius = function(){
    i++;
    return radius[i];
  }                          
// add data point circles
svgContainer.selectAll("dot")
      .data(data)
      .enter().append("circle")
        .attr("r", function(d){return getRadius();})
        .attr("class", function(d){return d.x - 1})
        .attr("cx", function(d) { return xScale(d.x); })
        .attr("cy", function(d) { return yScale(d.y); })
        .attr("transform", "translate(15,0)")
        .style("stroke","black")
        .style("fill","lightgray");

                            
    i = -1;                        
};


export default {
	init
};