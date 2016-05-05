import { map } from 'ramda';
import Velocity from 'velocity-animate';

const animate = () =>
  Velocity.animate(
    document.querySelector('#grrr'),
    {
      opacity: 0,
      translateY: -20,
    },
    { duration: 500 });

// COMPONENTS
const view = (ctrl, args) =>
  <div id="grrr" className="band-info">
    <div className="genre container">
      <h3 className="main-genre">{args.primaryGenre}</h3>
      <div className="sub-genres">
       {map(genre =>
          <span className="sub-genre column is-3 is-text-center">{genre}</span>,
          args.subGenres)}
      </div>
    </div>
    <div className="columns band-history">
      <div className="column is-2 is-text-left is-offset-3">
        <hr />
        <p>origin</p>
        <p>Los Angeles, California</p>
      </div>
      <div className="column is-2 is-text-left">
        <hr />
        <p>Heyday</p>
        <p>1967-1987</p>
      </div>
      <div className="column is-2 is-text-left">
        <hr />
        <p>Inducted into the Hall</p>
        <p>1987</p>
      </div>
    </div>
  </div>;

export default {
  view,
  animate,
};
