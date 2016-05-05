import { create } from '../../services/user';
import { emitPlaylistCreate } from '../../SocketHandler';
import RFIDMap from '../../RFIDMap';

export default {
  POST: ({ body }, res) =>
    create(body.usercode, RFIDMap[body.rfid])
    .then(created => {
      emitPlaylistCreate(created);
      return res.send(JSON.stringify(created));
    }),
};
