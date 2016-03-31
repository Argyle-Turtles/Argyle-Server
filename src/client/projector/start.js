import { map } from 'ramda';
import m, { prop } from 'mithril';

import { head } from '../components';

// VIEW MODEL
const vm = {
  init: () => {
    vm.bandName = prop('Captain Trey and the Peppy Peters');
    vm.primaryGenre = prop('Rock');
    vm.subGenres = prop(['Funck Rock', 'Alt Rock', 'Funk Metal']);
  },
};

// COMPONENTS
const subGenres = () =>
  map(genre => m('span[class=sub-genre]', genre), vm.subGenres());

const bandGenre = () =>
  m('.band-genre', [
    m('h2', vm.primaryGenre()),
    subGenres(),
  ]);

const bandInfo = () =>
  m('.band-info', [
    m('h1', vm.bandName()),
    bandGenre(),
  ]);

// VIEW
const view = () =>
  m('html', [
    head,
    m('body', [
      m('#pageone', [
        bandInfo(),
        m('button', {
          onclick: () => location.hash = '/projector/two',
        },
        'Rock Out!'),
      ]),
    ]),
  ]);

// CONTROLER
const controller = () => vm.init();

// EXPORT
export default {
  vm,
  view,
  controller,
};
