import m from 'mithril';

import { Head, Cursor } from '../components';

// VIEW
const view = () =>
  <html>
    <Head/>
    <body>
      <div id="#page-two">
        <h1>Something clever</h1>
      </div>
    </body>
  </html>;

// EXPORT
export default {
  view,
};
