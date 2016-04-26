import { addSongs } from '../../services/user';

export default {
  POST: ({ body }, res) =>
    addSongs(body.rfid, body.songs)
    .then(() => res.status('200').send()),
};
