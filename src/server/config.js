// hook into mongo db
const config = {};

config.port = process.env.PORT || 3000;

// Database connections
config.mongoURL = process.env.MONGOLAB_URI ||
  'mongodb://heroku_h8fzzmp1:e9bl796jb8lgnjacj831s8deo2@ds061148.mlab.com:61148/heroku_h8fzzmp1';

export default config;
