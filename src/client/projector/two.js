import m from 'mithril';

import { head } from '../components';

// VIEW
const view = () =>
  m('html', [
    head,
    m('body', [
      m('#page-two', [
        m('h1', 'Something clever'),
      ]),
    ]),
  ]);

// EXPORT
export default {
  view,
};
