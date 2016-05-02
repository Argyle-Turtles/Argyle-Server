import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';
import Promise from 'bluebird';

import { Spotify } from '../components';
import SongCard from './components/SongCard';
import { selectCard, deselectCard, fadeCardOut, moveAddedCard } from './animations';

const addedSongs = [null, null, null];

const addSongToPlaylist = (id, uri) => addedSongs[id] = uri;

const animateIn = () => {
  const time = vm.firstRender() ? 1 : 0;
  Velocity.animate(
    document.querySelector('#card-0'),
    {
      opacity: 1,
      // translateY: -20,
    },
    { duration: 500 * time });

  Velocity.animate(
    document.querySelector('#card-1'),
    {
      opacity: 1,
      // translateY: -20,
    },
    { delay: 200 * time, duration: 500 * time });

  Velocity.animate(
    document.querySelector('#card-2'),
    {
      opacity: 1,
      // translateY: -20,
    },
    { delay: 400 * time, duration: 500 * time });

  vm.firstRender(false);
};

const animateCardAdd = () => {
  R.map(button => Velocity(button, 'slideUp', 500),
    document.querySelectorAll('.song-card-button'));

  addedSongs.map((song, index) => {
    deselectCard(index)();
    return R.isNil(song) ? fadeCardOut(index) : moveAddedCard(index);
  });


};

const songData = [
  {
    album: 'We Like it Here',
    name: 'Shofukan',
    year: '2014',
    length: '6:33',
    description: 'This is some smooth funkalucious stuff right here',
    uri: 'spotify:track:5v0Q1mWIWd5XYtto97VUZy',
    img: 'http://placehold.it/433x433',
  },
  {
    album: 'We Like it Here',
    name: 'What About Me?',
    year: '2014',
    length: '6:43',
    description: 'Trey loves this fuckadelic stuff, he tells his grandma about it every sunday',
    uri: 'spotify:track:4YpXSKVrp8jhI7EAPV1xpF',
    img: 'http://placehold.it/433x433',
  },
  {
    album: 'We Like it Here',
    name: 'Tia Macaco',
    year: '2014',
    length: '5:44',
    description: 'Bring it home with some fucktastic sounds',
    uri: 'spotify:track:7DsEr8IEmhZYgAaHHwELwa',
    img: 'http://placehold.it/433x433',
  },
];

// VIEW MODEL
const vm = {
  init: () => {
    vm.songCards = m.prop(songData);
    vm.firstRender = m.prop(true);
  },
};

const pickACard = id => () => {
  [0, 1, 2].map(index => id === index ? selectCard(index)() : deselectCard(index)());
};

// VIEWS
const createCard = (data, id) =>
  <div id={`card-${id}`} className="song-card invis" onclick={pickACard(id)}>
    <SongCard
      song={data}
      cardId={id}
      addSong={addSongToPlaylist}/>
  </div>;

const view = () =>
    <div id="selection" config={animateIn}>
      <div className="card-holder">
        {
          vm.songCards().map(
          (card, i) => createCard(card, i))
        }
      </div>
    </div>;

// CONTROLLER
const controller = () => vm.init();

// EXPORT
export default {
  vm,
  view,
  controller,
  animateCardAdd,
};
