import { create } from '../../services/user';

export default {
  POST: ({ body }, res) =>
    create(body.usercode, body.rfid)
    .then(created => res.send(JSON.stringify(created))),
};
