import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';

const vm = {
  init: () => {
    vm.flipped = m.prop(false);
    vm.selected = m.prop(false);
    vm.added = m.prop(false);
  },
};

const triggerFlip = () => vm.flipped(!vm.flipped());

const handleFlip = id => () =>
  Velocity(
    document.querySelector(id),
    { rotateY: vm.flipped() ? '180deg' : '0deg' },
    800
  );

// View Helpers
const mid = (year, length) =>
  <div className="columns is-text-left">
    <div className="column is-half">
      <hr />
      <p className="subtitle is-6">Released</p>
      <p className="title is-4">{year}</p>
    </div>
    <div className="column is-half">
      <hr />
      <p className="subtitle is-6">Length</p>
      <p className="title is-4">{length}</p>
    </div>
  </div>;

const desc = text => <div className="is-text-left"><p>{text}</p></div>;

const foot = (uri, id, addSong) =>
  <footer className="card-footer song-card-button">
    <a class="card-footer-item"
      onclick={() => addSong(id, uri)}>Add</a>
  </footer>;

const img = url =>
  <div className="card-image">
    <figure className="image is-square">
      <img src={url} />
    </figure>
  </div>;

const songTitle = (name, album) =>
  <div className="is-text-left">
    <h1 className="title is-4">{name}</h1>
    <h3 className="subtitle is-6">{album}</h3>
  </div>;

const front = (song, id, addSong) =>
  <div id={`front-${id}`} className="card card-width">
    <div className="flip-button" onclick={triggerFlip}>
      flip
    </div>
    {img(song.img)}
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
    {foot(song.uri, id, addSong)}
  </div>;

const back = (song, id, addSong) =>
  <div id={`back-${id}`} className="card card-width">
    <div className="flip-button" onclick={triggerFlip}>
      flip
    </div>
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
    <div className="card-content song-card-info">
      {mid(song.year, song.length)}
      {desc(song.description)}
    </div>
    {foot(song.uri, id, addSong)}
  </div>;

const view = (_, { song, addSong, cardId }) =>
  <div className="flip-container">
    <div id={`flip-box-${cardId}`}
      className="flipper card-width"
      config={handleFlip(`#flip-box-${cardId}`)}>
      <div className="face front">
        {front(song, cardId, addSong)}
      </div>
      <div className="face back">
        {back(song, cardId, addSong)}
      </div>
    </div>
  </div>;

const controller = () => vm.init();

export default {
  vm,
  view,
  controller,
};
