import mongoose from 'mongoose';
import Promise from 'bluebird';
import log from 'winston';

/**
 * Establish connection to a mongoDB
 * @param {function} cb - Call back function
 * @return {Mongoose} return connected mongoose object
 */
export default function (mongoURL, next) {

  if (mongoose.connection.db) {
    if (next) next();
    return mongoose;
  }

  mongoose.Promise = Promise;
  mongoose.connect(mongoURL);

  // Add listeners for errors and connection
  mongoose.connection.on('error', (e) => log.error(e));
  mongoose.connection.once('open', () => {
    log.info('Connected to MongoDB at:', mongoURL, '\n');
    if (next) next();
  });

  // Return an initialized & connected Mongoose object
  return mongoose;
}
