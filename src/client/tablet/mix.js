import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';
import Promise from 'bluebird';

import {Head, Spotify, SongPreview} from '../components';

import {getUserSongsByUsercode} from '../socket/RestRequests';
import {getDataFromURIS} from '../SongData';

import Graph from './components/graph';
import EndCard from './components/EndCard';
import SongCard from '../projector/components/SongCard';
import PreviewCard from './components/PreviewCard';
import { selectCard, deselectCard} from '../projector/animations';


import d3 from 'd3';

// VIEW MODEL
const vm = {
  init: () => {
    vm.songCards = m.prop([]);
    vm.graphData = m.prop([]);
    vm.graphImg = m.prop([]);
    vm.circleRadius = m.prop([]);
    vm.songDataArray = [];
    vm.needsSongs = m.prop(true);
  },
};

const select = i => {
  const arr = R.repeat(false, vm.songDataArray.length);
  arr[i] = true;
  vm.songCards(R.zip(vm.songDataArray, arr));
};

const selectedCard = data =>
  <div className="column is-4">
    <EndCard
      song={data}
    />
  </div>;

const unselectedCard = i =>
  <div className="column is-3" onclick={() => {
    select(i);
    const circles = R.repeat(5,vm.songDataArray.length);
    vm.circleRadius(circles);
    vm.circleRadius()[i] = 10;
  }}>
    <PreviewCard />
  </div>;

const getLuv = () =>
  vm.needsSongs() && getUserSongsByUsercode(m.route.param('usercode'))
  .then(resp => {
    vm.songDataArray = getDataFromURIS(resp);

    const dataPoints = vm.songDataArray.map(function(data,i){
       data.decade;
       return {"x":i + 1, "y":data.decade};
    });
    vm.graphData(dataPoints);

    const bandPic = vm.songDataArray.map(function(data,i){
      console.log(data.img);
      return data.img;
    });
    const imgArray = R.concat(["url("+bandPic+""], R.repeat("#ef2222", vm.songDataArray.length - 1));
    vm.graphImg(imgArray);

    const zipArray = R.concat([true], R.repeat(false, vm.songDataArray.length - 1));
    vm.songCards(R.zip(vm.songDataArray, zipArray));

    const circles = R.concat([10], R.repeat(5,vm.songDataArray.length - 1));
    vm.circleRadius(circles);

    vm.needsSongs(false);
  });

const view = () =>
	<html className="endKiosk">
		<Head />
		<body>
			<div className="banner" config={getLuv}>
        <div className="bannerText">
            <div className="backButton" onclick={function(){location.search = "/tablet/"}}>
              <img className="backArrow" src="../../src/client/tablet/assets/back_arrow_white.png" height="35" width="35"/>
              Back
            </div>
          <div className="bannerTitle"> Mita-{m.route.param("usercode")}</div>
        </div>
      </div>
			<div className = "content">
				<div className='graphSpace'
          config={function () {
            console.log(vm.songDataArray);
            Graph.init(".graphSpace",vm.circleRadius(),vm.graphData(),vm.graphImg());
  						d3.selectAll("circle").on("click",function(){
  							//reset the values to the original size
                const circles = R.repeat(5,vm.songDataArray.length);
  							vm.circleRadius(circles);
  							//increase the clicked circles radius by setting the size in the vm
  							vm.circleRadius()[d3.select(this).attr("class")] = 10;
  							//select the card that matches with the clicked circle
   							select(d3.select(this).attr("class"));
   							//draw the view again
   							m.redraw();
   						})}}>
          <div className="rockJourney"> Your Rock Journey </div>
				</div>
				<div className="cards">
          <div className="hero-content">
            <div className="columns container">
                  {
                      vm.songCards().map(
                      ([card, visible], i) => visible ? selectedCard(card) : unselectedCard(i))
                  }
              </div>
            </div>
        </div>
        <SongPreview />
  				<div id="endButton" onclick={function(){location.search = "/tablet/one/"+m.route.param("usercode")+""}} type="button">
            Finalize!!
          </div>
    </div>
  </body>
</html>;

const controller = () => {
  vm.init();
  m.redraw.strategy("diff");
};

export default {
  vm,
  view,
  controller,
};
