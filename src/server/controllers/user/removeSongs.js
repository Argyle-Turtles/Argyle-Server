import { removeSongs, getUserPLaylistByUsercode } from '../../services/user';
import { emitSongRemove } from '../../SocketHandler';

export default {
  POST: ({ body }, res) => {
    removeSongs(body.usercode, body.songs)
    .then(getUserPLaylistByUsercode(body.usercode))
    .then(playlist => emitSongRemove(playlist, body.songs))
    .then(() => res.status('200').send());
  },
};
