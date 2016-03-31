import m from 'mithril';

import { head, cursor } from '../components';

// VIEW
const view = () =>
  m('html', [
    head,
    m('body', [
      m('#page-two', [
        m('h1', 'Something clever'),
        cursor,
      ]),
    ]),
  ]);

// EXPORT
export default {
  view,
};
