import { map } from 'ramda';

// COMPONENTS
const view = (ctrl, args) =>
  <div className="band-info">
    <h1>{args.bandName}</h1>
    <h2>{args.primaryGenre}</h2>
     {map(genre => <span className="sub-genre">{genre}</span>, args.subGenres)}
  </div>;

export default {
  view,
};
