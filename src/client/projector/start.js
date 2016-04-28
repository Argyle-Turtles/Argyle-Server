import m, { prop } from 'mithril';
import leap from '../leap';

// Shared components
import { Head, Cursor, Spotify } from '../components';

// Local Components
import BandInfo from './components/BandInfo';
import PageTwo from './two';
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

const currentPage = page => {
  if (page === 'ONE') {
    return <div id="page-one" className="hero is-fullheight">
        <div className="hero-content heh">
          <BandInfo
            bandName={vm.bandName()}
            primaryGenre={vm.primaryGenre()}
            subGenres={vm.subGenres()}/>
          <br />
          <a className="button is-medium container" onclick={() => vm.page('TWO')}>
            Rock out!
          </a>
        </div>
      </div>;
  }
  else if (page === 'TWO') return <PageTwo nextPage={() => vm.page('THREE')}/>;
  else if (page === 'THREE') return <PageThree />;
};

// VIEW
const view = () =>
  <html>
    <Head />
    <body>
      {currentPage(vm.page())}
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
