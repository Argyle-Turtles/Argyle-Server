import m, { prop } from 'mithril';

import d3 from 'd3';

export const init = (append,fill) => {

	d3.select("svg").remove();

	let f = -1;

	console.log(fill);

	const svg = d3.select(append).append("svg")
                                    .attr("width", 120)
                                    .attr("height", 30);

     const getFill = function(){
     	f++;
     	return fill[f];
     }

    svg.selectAll("circle")
    .data([1, 2, 3, 4])
  	.enter().append("circle")
    .attr("cy", 15)
    .attr("cx", function(d, i) { return i * 25 + 10; })
    .attr("r", 6)
    .attr("fill", function(d){return getFill();})
    .attr("stroke", "#eeeeee");

}

export default {
	init
};
