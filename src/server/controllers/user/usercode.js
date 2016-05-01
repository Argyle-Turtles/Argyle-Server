import { findByRFID } from '../../services/user';

export default {
  GET: ({ params }, res) =>
    findByRFID(params.rfid)
    .then(user => res.send(JSON.stringify(user))),
};
