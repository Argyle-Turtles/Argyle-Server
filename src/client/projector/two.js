import m from 'mithril';
import R from 'ramda';

import { Head, Cursor, Spotify } from '../components';
import SongCard from './components/SongCard';
import PreviewCard from './components/PreviewCard';
import leap from '../leap';
import { init as rfid } from '../rfid';

const songData = [
  {
    album: 'We Like it Here',
    name: 'Shofukan',
    year: '2014',
    length: '6:33',
    description: 'This is some smooth funkalucious stuff right here',
    uri: 'spotify:track:5v0Q1mWIWd5XYtto97VUZy',
  },
  {
    album: 'We Like it Here',
    name: 'What About Me?',
    year: '2014',
    length: '6:43',
    description: 'Trey loves this fuckadelic stuff, he tells his grandma about it every sunday',
    uri: 'spotify:track:4YpXSKVrp8jhI7EAPV1xpF',
  },
  {
    album: 'We Like it Here',
    name: 'Tia Macaco',
    year: '2014',
    length: '5:44',
    description: 'Bring it home with some fucktastic sounds',
    uri: 'spotify:track:7DsEr8IEmhZYgAaHHwELwa',
  },
];

// VIEW MODEL
const vm = {
  init: () => {
    vm.songCards = m.prop(R.zip(songData, [true, false, false]));
  },
};

const select = i => {
  const arr = [false, false, false];
  arr[i] = true;
  vm.songCards(R.zip(songData, arr));
};

// VIEWS
const selectedCard = data =>
  <div className="column is-4">
    <SongCard
      song={data} />
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
            {
              vm.songCards().map(
              ([card, visible], i) => visible ? selectedCard(card) : unselectedCard(i))
            }
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
  rfid(id => console.log(id));
  vm.init();
};

// EXPORT
export default {
  vm,
  view,
  controller,
};
