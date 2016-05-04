import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';

import { SongPreview } from '../../components'

const vm = {
  init: () => {
    vm.flipped = m.prop([false, false, false]);
    vm.selected = m.prop(false);
    vm.added = m.prop(false);
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

const artist = (artist, genre) =>
  <div className="card-content song-card-artist">
    <hr/>
    <div className="artist">
      {artist}
    </div>
    <div className="genre">
      {genre}
    </div>
  </div>


const foot = (uri, id, addSong) =>
  <footer className="card-footer song-card-button">
    <a class="card-footer-item song-card-button-link"
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
    <div className="flip-button" onclick={triggerFlip(id)}>
      flip
    </div>
    {img(song.img)}
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
    {foot(song.uri, id, addSong)}
  </div>;

const back = (song, end, id, addSong) =>
  <div id={`back-${id}`} className="card card-width">
    <div className="flip-button" onclick={triggerFlip(id)}>
      flip
    </div>
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
     end ? {artist(song.artist, song.genre)} : ""
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
      config={handleFlip(cardId)}>
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
