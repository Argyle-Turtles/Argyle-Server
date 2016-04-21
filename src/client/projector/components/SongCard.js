import m from 'mithril';
import { Spotify } from '../../components';
import Velocity from 'velocity-animate';

const vm = {
  init: () => vm.flipped = m.prop(false),
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

const foot = uri =>
  <footer className="card-footer song-card-button">
    <a class="card-footer-item"
      onclick={() => Spotify.addSong([uri])}>Add</a>
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

const front = song =>
  <div className="card">
    <div className="flip-button" onclick={triggerFlip}>
      flip
    </div>
    {img(song.img)}
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
    {foot(song.uri)}
  </div>;

const back = song =>
  <div className="card">
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
    {foot(song.uri)}
  </div>;

const triggerFlip = () => vm.flipped(!vm.flipped());

const handleFlip = () =>
  Velocity(
    document.querySelector('.flipper'),
    { rotateY: vm.flipped() ? '180deg' : '0deg' },
    800
  );

const view = (_, { song }) =>
  <div className="flip-container">
    <div className="flipper" config={handleFlip}>
      <div className="face front">
        {front(song)}
      </div>
      <div className="face back">
        {back(song)}
      </div>
    </div>
  </div>;

const controller = () => vm.init();

export default {
  vm,
  view,
  controller,
};
