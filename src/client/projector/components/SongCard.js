import m from 'mithril';
import Velocity from 'velocity-animate';

const vm = {
  init: () => {
    vm.flipped = m.prop([false, false, false]);
    vm.added = m.prop([false, false, false]);
    vm.playing = m.prop([false, false, false]);
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

const addButton = (uri, id, addSong) =>
  <a class="card-footer-item song-card-button-link"
    onclick={() => {
      const addedArray = vm.added();
      addedArray[id] = true;
      vm.added(addedArray);
      addSong(id, uri);
    }}>
    <img className="card-add-icon" src="assets/img/add_icon.svg" /> ADD
  </a>;

const removeButton = (uri, id, removeSong) =>
  <a class="card-footer-item song-card-button-link remove-button"
    onclick={() => {
      const addedArray = vm.added();
      addedArray[id] = false;
      vm.added(addedArray);
      removeSong(id, uri);
    }}>
    <img className="card-remove-icon" src="assets/img/remove_icon.svg" /> REMOVE
  </a>;

const foot = (uri, id, addSong, removeSong) =>
  <footer className="card-footer song-card-button">
    {vm.added()[id] ? removeButton(uri, id, removeSong) : addButton(uri, id, addSong)}
  </footer>;

const playPreview = (id, preview) => {
  preview.playAudio();
  const playingArray = vm.playing();
  playingArray[id] = true;
  vm.playing(playingArray);
};

const pausePreview = (id, preview) => {
  preview.pauseAudio();
  const playingArray = vm.playing();
  playingArray[id] = false;
  vm.playing(playingArray);
};

const previewControl = (id, preview) =>
  <div
    id={`preview-control-${id}`}
    className="preview-control">

    <img className="preview-control-dot" src="assets/img/div_dot.svg" />
    {
      vm.playing()[id] ?
      <img onclick={() => pausePreview(id, preview)}
        className="preview-control-pause"
        src="assets/img/pause.svg" /> :
      <img onclick={() => playPreview(id, preview)}
        className="preview-control-play"
        src="assets/img/play.svg" />
    }
  </div>;

const img = (url, id, preview) =>
  <div className="card-image">
    {previewControl(id, preview)}
    <figure className="image is-square">
      <img src={url} />
    </figure>
  </div>;

const songTitle = (name, album) =>
  <div className="is-text-left">
    <h1 className="title is-4">{name}</h1>
    <h3 className="subtitle is-6">{album}</h3>
  </div>;

const front = (song, id, addSong, removeSong, preview) =>
  <div id={`front-${id}`} className="card card-width">
    <div className="flip-button" onclick={triggerFlip(id)}>
      <img className="flip-button-arrow" src="assets/img/flip_arrow.svg" />
    </div>
    {img(song.img, id, preview)}
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
    {foot(song.uri, id, addSong, removeSong)}
  </div>;

const back = (song, id, addSong, removeSong) =>
  <div id={`back-${id}`} className="card card-width">
    <div className="flip-button" onclick={triggerFlip(id)}>
      <img className="flip-button-arrow" src="assets/img/flip_arrow.svg" />
    </div>
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
    <div id={`info-${id}`} className="card-content song-card-info">
      {mid(song.year, song.length)}
      {desc(song.description)}
    </div>
    {foot(song.uri, id, addSong, removeSong)}
  </div>;

const view = (_, { song, addSong, removeSong, cardId, preview }) =>
  <div className="flip-container">
    <div id={`flip-box-${cardId}`}
      className="flipper card-width"
      config={handleFlip(cardId)}>
      <div className="face front">
        {front(song, cardId, addSong, removeSong, preview)}
      </div>
      <div className="face back">
        {back(song, cardId, addSong, removeSong)}
      </div>
    </div>
  </div>;

const controller = () => vm.init();

export default {
  vm,
  view,
  controller,
};