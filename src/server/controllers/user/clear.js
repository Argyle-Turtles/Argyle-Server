import { clearRFID } from '../../services/user';
import RFIDMap from '../../RFIDMap';

export default {
  POST: ({ body }, res) =>
    clearRFID(RFIDMap[body.rfid])
    .then(() => res.status('200').send()),
};
