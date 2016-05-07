import m from 'mithril';
import Velocity from 'velocity-animate';
import {removeSong} from '../../socket/RestRequests';
import {Head, Spotify, SongPreview} from '../../components';
import funimations from '../endAnimations';

const vm = {
  init: () => {
    vm.flipped = m.prop([false, false, false]);
    vm.added = m.prop([false, false, false]);
    vm.playing = m.prop(false);
    vm.isPlaying = false;
  },
};


// View Helpers
const mid = (year, length) =>
  <div className="columns is-text-left">
    <div className="column is-half">
      <hr />
      <div className="title is-6">Released</div>
      <div className="subtitle is-4">{year}</div>
    </div>
    <div className="column is-half">
      <hr />
      <div className="title is-6">Length</div>
      <div className="subtitle is-4">{length}</div>
    </div>
  </div>;


const removeButton = (songToRemove,id) =>
  <a class="card-footer-item song-card-button-link remove-button"
    onclick={function(){ removeSong(m.route.param("usercode"),[songToRemove]);
    location.reload();
    // funimations.removeCard("#front-"+id);
    }}>
    <img className="card-remove-icon" src="assets/img/remove_icon.svg" /> REMOVE
  </a>;

const foot = (uri, id, addSong) =>
  <footer className="card-footer song-card-button">
    {removeButton(uri,id)}
  </footer>;

const img = (url, id, preview, uri) =>
  <div className="card-image">
      <img src={url} />
  </div>;

const songTitle = (name, album) =>
  <div className="is-text-left">
    <h1 className="title is-4">{name}</h1>
    <h3 className="subtitle is-6">{album}</h3>
  </div>;

const front = (song, id, addSong, preview) =>
  <div id={`front-${id}`} className="card card-width smallCard">
    {img(song.img, id, preview, song.uri)}
    <div className="card-content song-card-name">
      {songTitle(song.name, song.album)}
    </div>
    {foot(song.uri, id, addSong)}
  </div>;

const view = (_, { song, ID, addSong, preview }) =>
  <div className="flip-container">
    <div id={`flip-box-${ID}`}
      className="flipper card-width">
      <div className="face front smallCard">
        {front(song, ID, addSong, preview)}
      </div>
    </div>
  </div>;

const controller = () => vm.init();

export default {
  vm,
  view,
  controller,
};
