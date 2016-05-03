import { create } from '../../services/user';
import { emitPlaylistCreate } from '../../SocketHandler';

export default {
  POST: ({ body }, res) =>
    create(body.usercode, body.rfid)
    .then(created => {
      emitPlaylistCreate(created);
      return res.send(JSON.stringify(created));
    }),
};
