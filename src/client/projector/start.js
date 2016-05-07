import m, { prop } from 'mithril';
import leap from '../leap';
import R from 'ramda';
import Velocity from 'velocity-animate';

// Shared components
import { Head, Cursor, Spotify } from '../components';
import { transition1, transition2, transition3, transition4, reversePageTwo, frontPageIn, reversePageThree } from './animations';
import rfid from '../rfid';
import { addSongToUser } from '../socket/RestRequests';

// Local Components
import BandInfo from './components/BandInfo';
import Selection from './selection';
import Suggestion from './suggestions';

const artists = {
  peppers: {
    name: 'RED HOT CHILI PEPPERS',
    genre: 'Rock',
    subGenres: ['Funk Rock', 'Alt Rock', 'Funk Metal'],
    origin: 'Los Angeles, California',
    heyday: '1967-1987',
    inducted: '1987',
    video: 'assets/video/crowd_1.mp4',
  },
  elvis: {
    name: 'ELVIS PRESLEY',
    genre: 'Rock',
    subGenres: ['Funk Rock', 'Alt Rock', 'Funk Metal'],
    origin: 'Nashville, California',
    heyday: '1967-1987',
    inducted: '1987',
    video: 'assets/video/elvis.mp4',
  },
};

// VIEW MODEL
const vm = {
  init: () => {
    const pageArtist = artists[m.route.param('case')];

    vm.bandName = prop(pageArtist.name);
    vm.primaryGenre = prop(pageArtist.genre);
    vm.subGenres = prop(pageArtist.subGenres);
    vm.origin = prop(pageArtist.origin);
    vm.inducted = prop(pageArtist.inducted);
    vm.heyday = prop(pageArtist.heyday);
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
      if (Selection.selectedSongs().length <= 0) {
        trans.THREE();
      }
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
      window.setTimeout(() => {
        vm.page('FIVE');
        m.redraw();
      }, 1000);
    }),
  FIVE: () =>
    window.setTimeout(() => {
      vm.page('ONE');
      // m.redraw.strategy('none');
      m.redraw();
      console.log('k');
    }, 1000),
};

const backTrans = {
  ONE: () => null, // not this one
  TWO: () =>
    reversePageTwo()
    .then(() => {
      vm.page('ONE');
      m.redraw();
    })
    .then(frontPageIn),
  THREE: () =>
    reversePageThree()
    .then(() => {
      vm.page('TWO');
      m.redraw();
    }),
  FOUR: () => null, // not this one
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
            subGenres={vm.subGenres()}
            origin={vm.origin()}
            inducted={vm.inducted()}
            heyday={vm.heyday()}/>;
  }

  else if (isPage('TWO') || isPage('THREE')) {
    return <div config={readRfid}>
        <h1 id="rfid-feedback" className="mixtape-prompt invis">SCAN YOUR MIXTAPE!</h1>
        <Selection />
      </div>;
  }

  else return <Suggestion />;
};

const titleClass = () => 'band-name pg1-title';

const eh = () =>
  <div>
    <Cursor />
    <div id="projector">
      <div id="back-button" className="invis" onclick={backTrans[vm.page()]}>
        <img className="back-button-arrow" src="assets/img/back_arrow.svg" /> BACK
      </div>
      <h1 className={titleClass()}>{vm.bandName()}</h1>
      {currentPage(vm.page())}
    </div>
    <a className="bottom-button" onclick={trans[vm.page()]}>
      <span id="next-button-text">ROCK OUT</span> <img className="bottom-button-arrow" src="assets/img/skip_arrow.svg" />
    </a>
  </div>;

// VIEW
const view = () =>
  <html>
    <Head />
    <body>
      <div className="fullscreen-bg">
        <video loop muted autoplay className="fullscreen-bg__video">
            <source src={artists[m.route.param('case')].video} type="video/mp4" />
        </video>
      </div>
        {(vm.page() !== 'FIVE') ? eh() : <div config={trans.FIVE}></div>}
    </body>
  </html>;

// SOME HACKY BULLSHIT
// peppers
// x: 200, y: -200 ---------- x: 1430, y: -200
// ---------- y: 820
const calibrations = {
  peppers: {
    dx: 1280,
    dy: 1060,
    x: 120,
    y: -250,
  },

  elvis: {
    dx: 1230,
    dy: 1020,
    x: 140,
    y: -310,
  },
};

const touchScreen = ({ x, y }) => {
  const cali = calibrations[m.route.param('case')];

  const clickSpot = document.elementFromPoint(
    window.innerWidth - ((x - cali.x) / cali.dx * window.innerWidth),
    (y - cali.y) / cali.dy * window.innerHeight);
    console.log(clickSpot);
    mvCursor({ x, y });
    // console.log('click', `x: ${x}, y: ${y}`);
  return clickSpot && clickSpot.click();
};

const mvCursor = ({ x, y }) => {
  const cali = calibrations[m.route.param('case')];
  const mx = window.innerWidth - ((x - cali.x) / cali.dx * window.innerWidth);
  const my = (y - cali.y) / cali.dy * window.innerHeight;

  document.querySelector('#cursor').style.top = `${my}px`;
  document.querySelector('#cursor').style.left = `${mx}px`;
};

// CONTROLER
const controller = () => {
  leap.init(touchScreen, mvCursor);
  vm.init();
};

// EXPORT
export default {
  vm,
  view,
  controller,
};
