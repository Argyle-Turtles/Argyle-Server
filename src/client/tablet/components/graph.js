import m from 'mithril';

import {Head} from '../../components';

import * as spot from '../../components/spotify';

import  path from 'paths-js/stock';


const init = () => {
	//The data for our line
 const lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                  { "x": 80,  "y": 5},  { "x": 100, "y": 60}];
 
 //This is the accessor function we talked about above


 //const svgContainer = d3.select("body").append("svg")
   //                                 .attr("width", 200)
     //                               .attr("height", 200);

//The line SVG Path we draw


 
console.log(d3);
};


const view = () =>{
	//<svg className='graph' width='200' height='200'></svg>
	//{init()};
};

export default {
	view,
};