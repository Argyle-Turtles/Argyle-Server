import { getUserPLaylistByUsercode } from '../services/user';

export default {
  GET: ({ params }, res) => {
    getUserPLaylistByUsercode(params.usercode)
    .then(uri => res.redirect(`https://play.spotify.com/user/argyleturtles/playlist/${uri}`));
  },
};
