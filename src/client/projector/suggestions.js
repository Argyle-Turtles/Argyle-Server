import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';
import Promise from 'bluebird';

import ArtistCard from './components/ArtistCard';
import { selectCard, deselectCard, fadeToText } from './animations';

const animateIn = () =>
  fadeToText('.pg1-title', 'Whats Up Next?')
  .then(() => {
    Velocity.animate(
      document.querySelector('#card-artist-0'),
      {
        opacity: 1,
        translateY: -20,
      },
      { duration: 500 });

    Velocity.animate(
      document.querySelector('#card-artist-1'),
      {
        opacity: 1,
        translateY: -20,
      },
      { delay: 200, duration: 500 });

    Velocity.animate(
      document.querySelector('#card-artist-2'),
      {
        opacity: 1,
        translateY: -20,
      },
      { delay: 400, duration: 500 });

    Velocity.animate(
      document.querySelector('.bottom-button'),
      {
        opacity: 1,
      },
      500
    );
  });

const artistData = [
  {
    name: 'Elvis Presley',
    genre: 'Rock',
    img: 'http://placehold.it/433x433',
  },
  {
    name: 'Elvis Presley',
    genre: 'Rock',
    img: 'http://placehold.it/433x433',
  },
  {
    name: 'Elvis Presley',
    genre: 'Rock',
    img: 'http://placehold.it/433x433',
  },
];

// VIEW MODEL
const vm = {
  init: () => {
    vm.artistCards = m.prop(artistData);
  },
};

const pickACard = id => () => {
  ['artist-0', 'artist-1', 'artist-2']
  .map(index => id === index ? selectCard(index)() : deselectCard(index)());
};

// VIEWS
const createCard = (data, id) =>
  <div id={`card-${id}`} className="artist-card invis" onclick={pickACard(id)}>
    <ArtistCard
      artist={data}
      cardId={id}/>
  </div>;

const view = () =>
    <div id="suggestion" config={animateIn}>
      <div className="card-holder">
        {
          vm.artistCards().map(
          (card, i) => createCard(card, 'artist-' + i))
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
};
