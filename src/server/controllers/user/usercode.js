import { findByRFID } from '../../services/user';
import RFIDMap from '../../RFIDMap';

export default {
  GET: ({ params }, res) =>
    findByRFID(RFIDMap[params.rfid])
    .then(user => res.send(JSON.stringify(user))),
};
