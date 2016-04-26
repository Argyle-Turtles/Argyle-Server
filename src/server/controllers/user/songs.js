import R from 'ramda';

import { getUserSongsByRFID, getUserSongsByUsercode } from '../../services/user';

const getByUsercodeOrRFID =
  R.ifElse(
    R.has('usercode'),
    ({ usercode }) => getUserSongsByUsercode(usercode),
    ({ rfid }) => getUserSongsByRFID(rfid));

export default {
  GET: ({ body }, res) =>
    getByUsercodeOrRFID(body)
    .then(songs => res.send(JSON.stringify(songs))),
};
