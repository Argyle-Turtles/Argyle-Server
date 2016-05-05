import { addSongs, getUserPlaylistByRFID } from '../../services/user';
import { emitSongAdd } from '../../SocketHandler';
import RFIDMap from '../../RFIDMap';

export default {
  POST: ({ body }, res) => {
    addSongs(RFIDMap[body.rfid], body.songs)
    .then(getUserPlaylistByRFID(body.rfid))
    .then(playlist => emitSongAdd(playlist, body.songs))
    .then(() => res.status('200').send());
  },
};
