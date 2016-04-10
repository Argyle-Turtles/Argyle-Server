import { Spotify } from '../../components';

const top = (name, album) =>
  <div className="is-text-left">
    <h1 className="title is-3">{name}</h1>
    <h3 className="subtitle is-5">{album}</h3>
  </div>;

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
  <footer className="card-footer">
    <a class="card-footer-item"
      onclick={() => Spotify.addSong(uri)}>Add</a>
  </footer>;

const view = (_, { song }) =>
  <div className="card">
    <div className="card-content">
      {top(song.name, song.album)}
      {mid(song.year, song.length)}
      {desc(song.description)}
    </div>
    {foot(song.uri)}
  </div>;

export default {
  view,
};
