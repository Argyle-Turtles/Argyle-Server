import m from 'mithril';
import { Head, Spotify } from './components';

const view = () =>
  <html>
    <Head />
    <body config={Spotify.getAuthorization}>
      <a className="button is-medium" href ="/homepage">
        Homepage
      </a>
      <a className="button is-medium" href ="/projector/" config={m.route}>
        Projector
      </a>
      <a className="button is-medium" href ="/tablet/" config={m.route}>
        Tablet
      </a>
    </body>
  </html>;

export default {
  view,
};
