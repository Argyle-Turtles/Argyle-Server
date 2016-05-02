import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';

const vm = {
  init: () => {
    vm.flipped = m.prop([false, false, false]);
    vm.selected = m.prop(false);
  },
};

const triggerFlip = id => () => {
  const flippedArray = vm.flipped();
  flippedArray[id] = !flippedArray[id];
  vm.flipped(flippedArray);
};

const handleFlip = id => () => {
  Velocity(
    document.querySelector(`#flip-box-${id}`),
    { rotateY: vm.flipped()[id] ? '180deg' : '0deg' },
    800
  );
};

// View Helpers

const img = url =>
  <div className="card-image">
    <figure className="image is-square">
      <img src={url} />
    </figure>
  </div>;

const artistInfo = (name, genre) =>
  <div className="is-text-left">
    <h1 className="title is-4">{name}</h1>
    <h3 className="subtitle is-6">{genre}</h3>
  </div>;

const front = (artist, id) =>
  <div id={`front-${id}`} className="card card-width">
    <div className="flip-button" onclick={triggerFlip(id)}>
      flip
    </div>
    {img(artist.img)}
    <div className="card-content song-card-name">
      {artistInfo(artist.name, artist.genre)}
    </div>
  </div>;

const back = (artist, id) =>
  <div id={`back-${id}`} className="card card-width">
    <div className="flip-button" onclick={triggerFlip(id)}>
      flip
    </div>
    <div className="card-content song-card-name">
      {artistInfo(artist.name, artist.genre)}
    </div>
  </div>;

const view = (_, { artist, cardId }) =>
  <div className="flip-container">
    <div id={`flip-box-${cardId}`}
      className="flipper card-width"
      config={handleFlip(cardId)}>
      <div className="face front">
        {front(artist, cardId)}
      </div>
      <div className="face back">
        {back(artist, cardId)}
      </div>
    </div>
  </div>;

const controller = () => vm.init();

export default {
  vm,
  view,
  controller,
};
