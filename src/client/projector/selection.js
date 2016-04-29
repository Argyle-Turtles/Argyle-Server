import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';

import { Spotify } from '../components';
import SongCard from './components/SongCard';
import PreviewCard from './components/PreviewCard';

const animateIn = () => {
  const time = vm.firstRender() ? 1 : 0;
  Velocity.animate(
    document.querySelector('#card-0'),
    {
      opacity: 1,
      translateY: -20,
    },
    { duration: 500 * time });

  Velocity.animate(
    document.querySelector('#card-1'),
    {
      opacity: 1,
      translateY: -20,
    },
    { delay: 200 * time, duration: 500 * time });

  Velocity.animate(
    document.querySelector('#card-2'),
    {
      opacity: 1,
      translateY: -20,
    },
    { delay: 400 * time, duration: 500 * time });

  vm.firstRender(false);
};

const animateOut = () =>
  Velocity.animate(
    document.querySelector('#selection'),
    {
      opacity: [1, 0],
      translateY: [-20, 0],
    },
    { duration: 500 });

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
    vm.songCards = m.prop(R.zip(songData, [true, false, false]));
    vm.firstRender = m.prop(true);
  },
};

const select = i => {
  const arr = [false, false, false];
  arr[i] = true;
  vm.songCards(R.zip(songData, arr));
};

// VIEWS
const selectedCard = (data, id) =>
  <div id={`card-${id}`} className="column is-4 invis">
    <SongCard
      song={data} />
  </div>;

const unselectedCard = id =>
  <div id={`card-${id}`} className="column is-3 invis" onclick={() => select(id)}>
    <PreviewCard />
  </div>;

const view = () =>
    <div id="selection" className="columns container" config={animateIn}>
      <div className="column is-offset-3"></div>
      {
        vm.songCards().map(
        ([card, visible], i) => visible ? selectedCard(card, i) : unselectedCard(i))
      }
    </div>;

// CONTROLLER
const controller = () => vm.init();

// EXPORT
export default {
  vm,
  view,
  controller,
  animateOut,
};
