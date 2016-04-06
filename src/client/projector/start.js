import m, { prop } from 'mithril';
import leap from '../leap';

// Shared components
import { Head, Cursor } from '../components';

// Local Components
import BandInfo from './components/BandInfo';

// VIEW MODEL
const vm = {
  init: () => {
    vm.bandName = prop('Captain Trey and the Peppy Peters');
    vm.primaryGenre = prop('Rock');
    vm.subGenres = prop(['Funck Rock', 'Alt Rock', 'Funk Metal']);
  },
};

// VIEW
const view = () =>
  <html>
    <Head />
    <body>
      <div id="PageOne">
        <BandInfo
          bandName={vm.bandName()}
          primaryGenre={vm.primaryGenre()}
          subGenres={vm.subGenres()}/>
        <input
          type="button"
          onclick={() => location.hash = '/projector/two'}
          value="Rock out !" />
        <Cursor />
      </div>
    </body>
  </html>;

const moveCursor = ({ x, y }) => {
  const c = document.querySelector('#cursor');
  c.style.left = `${x}px`;
  c.style.top = `${y}px`;
};

const touchScreen = (finger) => {
  moveCursor(finger);
  const clickSpot = document.elementFromPoint(finger.x, finger.y - 10);
  return clickSpot && clickSpot.click();
};

// CONTROLER
const controller = () => {
  leap.init(touchScreen, moveCursor);
  vm.init();
};

// EXPORT
export default {
  vm,
  view,
  controller,
};
