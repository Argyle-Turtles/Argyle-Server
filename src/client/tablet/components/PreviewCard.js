import m from 'mithril';
import Velocity from 'velocity-animate';
import {removeSong} from '../../socket/RestRequests';
import {Head, Spotify, SongPreview} from '../../components';

const vm = {
  init: () => {
    vm.added = m.prop([false, false, false]);
    vm.playing = m.prop(false);
    vm.isPlaying = false;
  },
};


const removeButton = (songToRemove) =>
  <a class="card-footer-item song-card-button-link remove-button preview-remove"
    onclick={() => removeSong(m.route.param("usercode"),[songToRemove])}>
    <img className="card-remove-icon" src="assets/img/remove_icon.svg" /> REMOVE
  </a>;

const foot = (uri, id, addSong) =>
  <footer className="card-footer song-card-button">
    {removeButton(uri)}
  </footer>;

const img = (url, id, preview, uri) =>
  <div className="card-image">
      <img className="previewImg" src={url} />
  </div>;

const songTitle = (name, album) =>
  <div className="is-text-left">
    <h1 className="title is-5">{name}</h1>
    <h3 className="subtitle is-6">{album}</h3>
  </div>;

const front = (song, id, addSong, preview) =>
  <div id={`front-${id}`} className="card preview-card-width">
    {img(song.img, id, preview, song.uri)}
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
    {foot(song.uri, id, addSong)}
  </div>;

const view = (_, { song, addSong, cardId, preview }) =>
  <div className="flip-container">
    <div id={`flip-box-${cardId}`}
      className="flipper card-width">
      <div className="face front">
        {front(song, cardId, addSong, preview)}
      </div>
    </div>
  </div>;

const controller = () => vm.init();

export default {
  vm,
  view,
  controller,
};
