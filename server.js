// Import outside libaries
import express from 'express';
import router from 'express-enrouten';
import bodyParser from 'body-parser';
import path from 'path';

import routes from './routes';

const server = express();

// Set parsers
server.use(cookieParser(config.secret))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));

server.use(router(routes));

// Start server
server.set('port', config.port)
  .listen(config.port, (err) => {
    if (err) throw err;
    log.info('Listening on port:', config.port, '\n');
  });

export default server;
