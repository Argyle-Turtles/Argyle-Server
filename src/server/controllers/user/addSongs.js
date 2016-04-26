import { addSongs } from '../../services/user';

export default {
  POST: ({ body }, res) => {
    console.log(body);
    return addSongs(body.rfid, body.songs)
    .then(() => res.status('200').send());
  },
};
