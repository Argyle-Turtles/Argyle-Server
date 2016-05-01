import m, { prop } from 'mithril';
import leap from '../leap';

// Shared components
import { Head, Spotify } from '../components';
import { init as rfid } from '../rfid';

// VIEW MODEL
const vm = {
  init: () => {
    vm.songs = m.prop(['4Y9T0Ea9ux3oYo12VEfXKV', '2XtZEqA90I0pu6aqB5nty8']);
  },
};

const addSongsToServer = id =>
  m.request({
    method: 'POST',
    url: '/user/add',
    data: {
      rfid: id,
      songs: vm.songs(),
    },
    serialize: data => JSON.stringify(data),
    config: xhr => {
      xhr.setRequestHeader('Content-Type', 'application/json');
    },
  });

const addSongsToSpotify = id =>
  m.request({
    method: 'GET',
    url: '/user/playlist/rfid/' + id,
  })
  .then(res => console.log(res));

// VIEW
const view = () =>
  <html>
    <Head />
    <body>
      <div id="page-one" className="hero is-fullheight">
        <div className="hero-content heh">
          <a className="button is-medium container" onclick={() => {
            addSongsToSpotify('07616121');
          }}>
            Rock out!
          </a>
        </div>
      </div>
    </body>
  </html>;

// SOME HACKY BULLSHIT
// top left coords 1320 100
// bot right 240 876

const touchScreen = ({ x, y }) => {
  const clickSpot = document.elementFromPoint(
    window.innerWidth - ((x - 240) / 1080 * window.innerWidth),
    (y - 100) / 776 * window.innerHeight);
  return clickSpot && clickSpot.click();
};

// CONTROLER
const controller = () => {
  leap.init(touchScreen, () => false);
  vm.init();
  rfid(id => {
    addSongsToServer(id);
    addSongsToSpotify(id);
  });
  Spotify.getAuthorization();
};

// EXPORT
export default {
  vm,
  view,
  controller,
};
