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

const artistData = {
  peppers: [
    {
      name: 'Elvis Presley',
      genre: 'Rock',
      img: '/assets/img/Elvis-Presley.jpg',
    },
    {
      name: 'Nirvana',
      genre: 'Alternative',
      img: '/assets/img/Nirvana2.jpg',
    },
    {
      name: 'Iron Maiden',
      genre: 'Metal',
      img: '/assets/img/iron_maiden.jpg',
    },
  ],

  elvis: [
    {
      name: 'Red Hot Chili Peppers',
      genre: 'Rock',
      img: '/assets/img/chili-peppers.jpg',
    },
    {
      name: 'Muddy Waters',
      genre: 'Blues',
      img: '/assets/img/Muddy-Waters_05.jpg',
    },
    {
      name: 'Ray Charles',
      genre: 'R&B/Soul',
      img: '/assets/img/Ray-Charles.jpg',
    },
  ],
};

// VIEW MODEL
const vm = {
  init: () => {
    vm.artistCards = m.prop(artistData[m.route.param('case')]);
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
