import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';
import Promise from 'bluebird';
import io from 'socket.io-client';

import { Head, Spotify } from '../components';
import { setPlaylist } from './RestRequests';

const registerSpotify = () => Spotify.getAuthorization();

const hookUpThemSweetSockets = socket => {
  socket.on('addSong', data => Spotify.addSong(data.uriList, data.playlist));

  socket.on('removeSong', data => Spotify.removeSong(data.uris, data.playlist));

  socket.on('makePlaylist', ({ user }) =>
    Spotify.makePlaylist('mix-' + user)
    .then(({ id }) => setPlaylist(user, id)));
};

// VIEW MODEL

// VIEWS

const view = () =>
  <html>
    <Head />
    <body>
      <div config={registerSpotify}></div>
    </body>
  </html>;

// CONTROLLER
const controller = () => {
  const socket = io.connect('http://localhost:3001');
  socket.on('connect', () => console.log('Hooked on sockets worked for me!'));
  hookUpThemSweetSockets(socket);
};

// EXPORT
export default {
  view,
  controller,
};
