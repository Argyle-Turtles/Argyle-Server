import { findByRFID } from '../../services/user';

export default {
  GET: ({ body }, res) =>
    findByRFID(body.rfid)
    .then(user => res.send(JSON.stringify(user))),
};
