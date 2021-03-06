import R from 'ramda';

import { setPlaylist, getUserPlaylistByRFID, getUserPLaylistByUsercode } from '../../services/user';
import RFIDMap from '../../RFIDMap';

const getByUsercodeOrRFID =
  R.ifElse(
    R.has('usercode'),
    ({ usercode }) => getUserPLaylistByUsercode(usercode),
    ({ rfid }) => getUserPlaylistByRFID(RFIDMap[rfid]));

export default {
  GET: ({ params }, res) =>
    getByUsercodeOrRFID(params)
    .then(playlist => res.send(JSON.stringify(playlist))),

  POST: ({ body }, res) =>
    setPlaylist(body.usercode, body.playlistURI)
    .then(() => res.status('200').send()),
};
