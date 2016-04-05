import { map } from 'ramda';
// <h3 className="main-genre title column">{args.primaryGenre}</h3>

// COMPONENTS
const view = (ctrl, args) =>
  <div className="band-info">
    <h1 className="band-name title is-1">{args.bandName}</h1>
    <div className="genre container columns is-multiline">
      <h3 className="main-genre title column is-half is-offset-5">{args.primaryGenre}</h3>
      <div className="sub-genres columns column is-half is-offset-6">
       {map(genre => <span className="sub-genre column is-3 is-text-left">{genre}</span>, args.subGenres)}
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
};
