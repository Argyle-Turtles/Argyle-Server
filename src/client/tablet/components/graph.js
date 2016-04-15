import m from 'mithril';

import {Head} from '../../components';

import * as spot from '../../components/spotify';

import  path from 'paths-js/pie';
import d3 from 'd3';


 export const init = (append) => {
  //scale from 1 to 8
  //labels will be customized to be decades
  const yScale = d3.scale.linear()
                          //min and max number
                          .domain([0, 8])
                          //pixels the graph can render
                          .range([0, 200]);
  //should be length of graph/total songs on playlist
  const xScale = d3.scale.linear()
                          .domain([0, 8])
                          .range([0, 200]);

  //creates axis with x and y scales
  const yAxis = d3.svg.axis().scale(yScale).orient("left");

  //draw graph line
  const lineGen = d3.svg.line()
                  .x(function(d) {
                    return xScale(d.x);
                  })
                  .y(function(d) {
                    return yScale(d.y);
                  }).interpolate("basis");

	//The data for our line
 const data = [ { "x": 1,   "y": 5},  { "x": 2,  "y": 2},
                  { "x": 3,  "y": 1}, { "x": 4,  "y": 4},
                  { "x": 5,  "y": 5},  { "x": 6, "y": 6}];
 
 //This is the accessor function we talked about above

//The SVG Container
const svgContainer = d3.select(append).append("svg")
                                    .attr("width", 250)
                                    .attr("height", 250);

const yAxisGroup = svgContainer.append("g").attr("transform", "translate(" + 20 + ","+ 10 +")").call(yAxis);

//The line SVG Path we draw

const lineGraph = svgContainer.append("path")
                            .attr('d', lineGen(data))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
                            
                            
};


const view = () =>
	//<svg className='graph' width='200' height='200'></svg>
	{init()};


export default {
	init,
};