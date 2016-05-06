import m, { prop } from 'mithril';
import leap from '../leap';

// Shared components
import { Head, Cursor, Spotify } from '../components';
import { transition1, transition2, transition3, transition4 } from './animations';
import rfid from '../rfid';
import { addSongToUser } from '../socket/RestRequests';

// Local Components
import BandInfo from './components/BandInfo';
import Selection from './selection';
import Suggestion from './suggestions';

// VIEW MODEL
const vm = {
  init: () => {
    vm.bandName = prop('Elvis Presley');
    vm.primaryGenre = prop('Rock');
    vm.subGenres = prop(['Funk Rock', 'Alt Rock', 'Funk Metal']);
    vm.page = prop('ONE');
  },
};

const isPage = page => vm.page() === page;

const trans = {
  ONE: () =>
    transition1()
    .then(() => {
      vm.page('TWO');
      m.redraw();
    }),

  TWO: () =>
    transition2()
    .then(() => {
      vm.page('THREE');
      m.redraw();
    }),

  THREE: () =>
    transition3()
    .then(() => {
      vm.page('FOUR');
      m.redraw();
    }),

  FOUR: () =>
    transition4()
    .then(() => {
      window.setTimeout(() => window.location.reload(), 2000);
    }),

  ZERO: () =>
    transition4()
    .then(() => {
      m.redraw();
    }),
};

const readRfid = () =>
  rfid.init(code => {
    if (isPage('THREE')) {
      addSongToUser(code, Selection.selectedSongs())
      .then(() => trans.THREE());
    }
  });

const currentPage = () => {
  if (isPage('ONE')) {
    return <BandInfo
            bandName={vm.bandName()}
            primaryGenre={vm.primaryGenre()}
            subGenres={vm.subGenres()}/>;
  }

  else if (isPage('TWO') || isPage('THREE')) {
    return <div config={readRfid}>
        <h1 id="rfid-feedback" className="title is-1 invis">Words Words Words</h1>
        <Selection />
      </div>;
  }

  else return <Suggestion />;
};

const titleClass = () => 'band-name pg1-title';

// VIEW
const view = () =>
  <html>
    <Head />
    <body>
    <div className="fullscreen-bg">
      <video loop muted autoplay className="fullscreen-bg__video">
          <source src="assets/video/elvis.mp4" type="video/mp4" />
      </video>
    </div>
      <div id="projector is-fullheight">
          <h1 className={titleClass()}>{vm.bandName()}</h1>
          {currentPage(vm.page())}
          <a className="bottom-button" onclick={trans[vm.page()]}>
            ROCK OUT <img className="bottom-button-arrow" src="assets/img/skip_arrow.svg" />
          </a>
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
};

// EXPORT
export default {
  vm,
  view,
  controller,
};
