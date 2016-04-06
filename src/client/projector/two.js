import m from 'mithril';
import R from 'ramda';

import { Head, Cursor } from '../components';
import SongCard from './components/SongCard'
import PreviewCard from './components/PreviewCard'

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
      <div id="page-two" className="hero is-fullheight">
        <div className="hero-content">
          <div className="columns container">
            {vm.songCards().map((card, i) => card ? selectedCard() : unselectedCard(i))}
          </div>
        </div>
      </div>
    </body>
  </html>;

// CONTROLLER
const controller = () =>
  vm.init();

// EXPORT
export default {
  vm,
  view,
  controller,
};
