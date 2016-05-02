import m, { prop } from 'mithril';
import leap from '../leap';

// Shared components
import { Head, Cursor, Spotify } from '../components';
import { transition1, transition2, transition3 } from './animations';

// Local Components
import BandInfo from './components/BandInfo';
import Selection from './selection';
import PageThree from './three';

// VIEW MODEL
const vm = {
  init: () => {
    vm.bandName = prop('Red Hot Chili Peppers');
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
      // vm.page('TWO');
      m.redraw();
    }),
  TWO: () =>
    transition3()
    .then(() => {
      // vm.page('TWO');
      m.redraw();
    }),
};

const currentPage = page => {
  if (isPage('ONE')) {
    return <BandInfo
            bandName={vm.bandName()}
            primaryGenre={vm.primaryGenre()}
            subGenres={vm.subGenres()}/>;
  }
  else if (isPage('TWO')) {
    return <div>
        <h1 id="rfid-feedback" className="title is-1 invis">Words Words Words</h1>
        <Selection />
      </div>;
  }
  else if (isPage('THREE')) return <PageThree />;
};

const titleClass = () => 'band-name title is-1 pg1-title';

// VIEW
const view = () =>
  <html>
    <Head />
    <body>
      <div id="projector is-fullheight">
          <h1 className={titleClass()}>{vm.bandName()}</h1>
          {currentPage(vm.page())}
          <a className="button is-medium bottom-button" onclick={trans[vm.page()]}>
            Rock out!
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
