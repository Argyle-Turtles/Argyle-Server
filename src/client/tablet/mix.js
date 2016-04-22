import m, { prop } from 'mithril';
import R from 'ramda';

import {Head, Spotify} from '../components';

import Graph from './components/graph';
import SongCard from '../projector/components/SongCard';
import PreviewCard from '../projector/components/PreviewCard';

import d3 from 'd3';

const songData = [
  {
    album: 'We Like it Here',
    name: 'Shofukan',
    year: '2014',
    length: '6:33',
    description: 'Peter peter peter. Peter, peter peter.',
    uri: 'spotify:track:5v0Q1mWIWd5XYtto97VUZy',
  },
  {
    album: 'We Like it Here',
    name: 'What About Me?',
    year: '2014',
    length: '6:43',
    description: 'Peter your music is crap.',
    uri: 'spotify:track:4YpXSKVrp8jhI7EAPV1xpF',
  },
  {
    album: 'We Like it Here',
    name: 'Tia Macaco',
    year: '2014',
    length: '5:44',
    description: 'Bring it home with some peter sounds',
    uri: 'spotify:track:7DsEr8IEmhZYgAaHHwELwa',
  },
];

// VIEW MODEL
const vm = {
  init: function(){
    vm.songCards = m.prop(R.zip(songData, [true, false, false]));
    vm.circleRadius = m.prop([5,5,5]);
  },
};

const select = function(i){
  const arr = [false, false, false];
  arr[i] = true;
  vm.songCards(R.zip(songData, arr));
};

const selectedCard = data =>
  <div className="column is-4">
    <SongCard
      song={data} />
  </div>;

const unselectedCard = i =>
  <div className="column is-3" onclick={function(){
   	select(i);
   	vm.circleRadius([3.5,3.5,3.5]);
   	vm.circleRadius()[i] = 10;
   	console.log(i);
   }}>
    <PreviewCard />
  </div>;

const view = () =>
	<html>
		<Head />
		<body>
			<div className="banner">mixy tape</div>
			<div className = "content">
				<input
            		className="button is-medium container"
            		type="button"
            		onclick={ function(){document.location.href="https://accounts.spotify.com:/authorize?client_id=b5dc615d0bcc47109e0ea1c5725f1cb8&response_type=token&redirect_uri=http://localhost:3000/?/tablet/mix&scope=playlist-modify-private playlist-modify-public&show_dialog=false";}}
            		value="Autorize" />
            	<input
            		className="button is-medium container"
            		type="button"
            		onclick={ function(){ Spotify.getPlaylist();}}
            		value="Get Music" />
				<div className='graphSpace' config={function(){Graph.init(".graphSpace",vm.circleRadius()); 
											d3.selectAll("circle").on("click",function(){
												//reset the values to the original size
												vm.circleRadius([3.5,3.5,3.5]);
												//increase the clicked circles radius by setting the size in the vm
												vm.circleRadius()[d3.select(this).attr("class")] = 10;
													//d3.selectAll("circle").attr("r",3.5);
													//d3.select(this).attr("r",10);
												//select the card that matches with the clicked circle 
					 							select(d3.select(this).attr("class")); 
					 							//draw the view again
					 							m.redraw();
					 						})}}>
				</div>
        		<div className="hero-content">
          			<div className="columns container">
            			{
              				vm.songCards().map(
              				([card, visible], i) => visible ? selectedCard(card) : unselectedCard(i))
            			}
         			</div>
        		</div>
				<input 
					className="button is-medium container"
					type="button"
            		onclick={function(){location.search = '/tablet/one'}}
            		value="Rock On!" />
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