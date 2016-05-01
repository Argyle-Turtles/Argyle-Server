import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  usercode: {
    type: String,
    required: true,
    unique: true,
  },

  rfid: {
    type: String,
    required: true,
  },

  playlist: {
    type: String,
    default: '',
  },

  songs: {
    type: [],
    default: [],
  },
});

export { schema };
export const model = mongoose.model('User', schema);
