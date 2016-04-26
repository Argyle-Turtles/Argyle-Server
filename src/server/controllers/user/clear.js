import { clearRFID } from '../../services/user';

export default {
  POST: ({ body }, res) =>
    clearRFID(body.rfid)
    .then(() => res.status('200').send()),
};
