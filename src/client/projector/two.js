import m from 'mithril';
import R from 'ramda';

import { Head, Cursor } from '../components';
import SongCard from './components/SongCard';
import PreviewCard from './components/PreviewCard';
import leap from '../leap';

// VIEW MODEL
const vm = {
  init: () => {
    vm.songCards = m.prop([true, false, false]);
  },
};

const select = i => {
  const arr = [false, false, false];
  arr[i] = true;
  vm.songCards(arr);
};

// VIEWS
const selectedCard = () =>
  <div className="column is-4">
    <SongCard />
  </div>;

const unselectedCard = i =>
  <div className="column is-3" onclick={() => select(i)}>
    <PreviewCard />
  </div>;

const view = () =>
  <html>
    <Head/>
    <body>
      <Cursor />
      <div id="page-two" className="hero is-fullheight">
        <div className="hero-content">
          <div className="columns container">
            <div className="column is-offset-3"></div>
            {vm.songCards().map((card, i) => card ? selectedCard() : unselectedCard(i))}
          </div>
        </div>
      </div>
    </body>
  </html>;

const moveCursor = ({ x, y }) => {
  const c = document.querySelector('#cursor');
  c.style.left = `${(x - 240) / 1080 * window.innerWidth}px`;
  c.style.top = `${(y - 100) / 776 * window.innerHeight}px`;
};

const touchScreen = ({ x, y }) => {
  moveCursor({ x, y });
  const clickSpot = document.elementFromPoint(
    window.innerWidth - ((x - 240) / 1080 * window.innerWidth),
    (y - 100) / 776 * window.innerHeight);
  return clickSpot && clickSpot.click();
};

// CONTROLLER
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
