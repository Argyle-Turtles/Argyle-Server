import m from 'mithril';

import {Head} from '../../components';

import * as spot from '../../components/spotify';

import  path from 'paths-js/pie';
import d3 from 'd3';


 export const init = (append) => {
	//The data for our line
 const lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                  { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                  { "x": 80,  "y": 5},  { "x": 100, "y": 60}];
 
 //This is the accessor function we talked about above
 const lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; })
                         .interpolate("basis");

//The SVG Container
const svgContainer = d3.select(append).append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

//The line SVG Path we draw
const lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

                            console.log("SUCCESS");
};


const view = () =>
	//<svg className='graph' width='200' height='200'></svg>
	{init()};


export default {
	init,
};