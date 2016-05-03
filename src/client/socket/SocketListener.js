import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';
import Promise from 'bluebird';
import io from 'socket.io-client';

import { Head, Spotify } from '../components';

// VIEW MODEL

// VIEWS

const view = () =>
  <html>
    <Head />
    <body>
    </body>
  </html>;

// CONTROLLER
const controller = () => {
  const socket = io.connect('http://localhost:3001');
  socket.on('connect', () => console.log('did it!'));
};

// EXPORT
export default {
  view,
  controller,
};
