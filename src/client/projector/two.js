import m from 'mithril';

import { Head, Cursor } from '../components';
import SongCard from './components/SongCard'
import PreviewCard from './components/SongCard'

// VIEW
const view = () =>
  <html>
    <Head/>
    <body>
      <div id="page-two" className="hero is-fullheight">
        <SongCard />
        <PreviewCard />
      </div>
    </body>
  </html>;

// EXPORT
export default {
  view,
};
