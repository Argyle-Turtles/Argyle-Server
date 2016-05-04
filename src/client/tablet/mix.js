import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';
import Promise from 'bluebird';

import {Head, Spotify, SongPreview} from '../components';

import {removeSong} from '../socket/RestRequests';

import Graph from './components/graph';
import EndCard from './components/EndCard';
import PreviewCard from './components/PreviewCard';
import { selectCard, deselectCard} from '../projector/animations';

import d3 from 'd3';

//change to delete song at some point 
const addSongToPlaylist = (id, uri) => addedSongs[id] = uri;

const songData = [
  {
    album: 'We Like it Here',
    name: 'Shofukan',
    year: '2014',
    length: '6:33',
    description: 'This is some smooth funkalucious stuff right here',
    uri: '41kg2RvdwBuIv0OPpvBS4v',
    img: 'http://placehold.it/433x433',
    remove: "spotify:track:41kg2RvdwBuIv0OPpvBS4v",
    artist: 'Peter',
    genre: "Alternative, maybe",
  },
  {
    album: 'We Like it Here',
    name: 'What About Me?',
    year: '2014',
    length: '6:43',
    description: 'Trey loves this fuckadelic stuff, he tells his grandma about it every sunday',
    uri: '4CYENH0iPFuWXpWsrstBW3',
    remove: "spotify:track:41kg2RvdwBuIv0OPpvBS4v",
    img: 'http://placehold.it/433x433',
    artist: 'Peter',
    genre: "Alternative, maybe",
  },
  {
    album: 'We Like it Here',
    name: 'Tia Macaco',
    year: '2014',
    length: '5:44',
    description: 'Bring it home with some fucktastic sounds',
    uri: '4CYENH0iPFuWXpWsrstBW3',
    img: 'http://placehold.it/433x433',
    remove: "spotify:track:41kg2RvdwBuIv0OPpvBS4v",
    artist: 'Peter',
    genre: "Alternative, maybe",
  },
   {
    album: 'We Like it Here',
    name: 'Tia Macaco',
    year: '2014',
    length: '5:44',
    description: 'Bring it home with some fucktastic sounds',
    uri: '4CYENH0iPFuWXpWsrstBW3',
    img: 'http://placehold.it/433x433',
    remove: "spotify:track:41kg2RvdwBuIv0OPpvBS4v",
    artist: 'Peter',
    genre: "Alternative, maybe",
  },
   {
    album: 'We Like it Here',
    name: 'Tia Macaco',
    year: '2014',
    length: '5:44',
    description: 'Bring it home with some fucktastic sounds',
    uri: '4CYENH0iPFuWXpWsrstBW3',
    remove: "spotify:track:41kg2RvdwBuIv0OPpvBS4v",
    img: 'http://placehold.it/433x433',
    artist: 'Peter',
    genre: "Alternative, maybe",
  },
   {
    album: 'We Like it Here',
    name: 'Tia Macaco',
    year: '2014',
    length: '5:44',
    description: 'Bring it home with some fucktastic sounds',
    uri: '4CYENH0iPFuWXpWsrstBW3',
    remove: "spotify:track:41kg2RvdwBuIv0OPpvBS4v",
    img: 'http://placehold.it/433x433',
    artist: 'Peter',
    genre: "Alternative, maybe",
  },

];

// VIEW MODEL
const vm = {
  init: function(){
    vm.songCards = m.prop(R.zip(songData, [true, false, false,false,false,false]));
    vm.circleRadius = m.prop([10,5,5,5,5,5]);
  },
};

const select = function(i){
  const arr = [false, false, false,false,false,false];
  arr[i] = true;
  vm.songCards(R.zip(songData, arr));
};

const selectedCard = data =>
  <div className="column is-4">
    <EndCard
      song={data} />
  </div>;

const unselectedCard = i =>
  <div className="column is-3" onclick={function(){
    select(i);
    vm.circleRadius([5,5,5,5,5,5]);
    vm.circleRadius()[i] = 10;
    console.log(i);
   }}>
    <PreviewCard />
  </div>;

const view = () =>
	<html className="endKiosk">
		<Head />
		<body>
			<div className="banner">
        <div
        className="backButton"
        onclick={function(){location.search = "/tablet/mix"}}>
        Back </div>
        <div className="bannerTitle"> Mixy Tape</div>
      </div>
			<div className = "content">
				<div className='graphSpace' config={function(){Graph.init(".graphSpace",vm.circleRadius()); 
											d3.selectAll("circle").on("click",function(){
												//reset the values to the original size
												vm.circleRadius([5,5,5,5,5,5]);
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
				<input 
					className="button is-medium container"
					type="button"
            		onclick={function(){location.search = '/tablet/one'}}
            		value="Finalize" />
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