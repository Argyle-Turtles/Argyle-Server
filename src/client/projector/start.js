import m, { prop } from 'mithril';
import leap from '../leap';

// Shared components
import { Head, Cursor, Spotify } from '../components';

// Local Components
import BandInfo from './components/BandInfo';

// VIEW MODEL
const vm = {
  init: () => {
    vm.bandName = prop('Red Hot Chili Peppers');
    vm.primaryGenre = prop('Rock');
    vm.subGenres = prop(['Funk Rock', 'Alt Rock', 'Funk Metal']);
  },
};

// VIEW
const view = () =>
  <html>
    <Head />
    <body>
      <div id="page-one" className="hero is-fullheight">
        <div className="hero-content heh">
          <BandInfo
            bandName={vm.bandName()}
            primaryGenre={vm.primaryGenre()}
            subGenres={vm.subGenres()}/>
          <br />
          <a className="button is-medium container" href ="/projector/two" config={m.route}>
            Rock out!
          </a>
        </div>
      </div>
    </body>
  </html>;

// SOME HACKY BULLSHIT
// top left coords 1320 100
// bot right 240 876

const moveCursor = ({ x, y }) => {
  // const c = document.querySelector('#cursor');
  // console.log(c);
  // c.style.left = `${(x - 240) / 1080 * window.innerWidth}px`;
  // c.style.top = `${(y - 100) / 776 * window.innerHeight - 5}px`;
};

const touchScreen = ({ x, y }) => {
  moveCursor({ x, y });
  const clickSpot = document.elementFromPoint(
    window.innerWidth - ((x - 240) / 1080 * window.innerWidth),
    (y - 100) / 776 * window.innerHeight);
  return clickSpot && clickSpot.click();
};

// CONTROLER
const controller = () => {
  leap.init(touchScreen, moveCursor);
  vm.init();
  Spotify.getAuthorization();
};

// EXPORT
export default {
  vm,
  view,
  controller,
};
