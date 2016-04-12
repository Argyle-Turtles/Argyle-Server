// Import outside libaries
import express from 'express';
import router from 'express-enrouten';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';

import routes from './routes';

const port = process.env.PORT || 3000;

const server = express();

// Set parsers
server.use(cookieParser('peter'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));

server.use(router(routes));

server.use(express.static('build'));
server.use(express.static(__dirname));

server.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + '/index.html')));

// Start server
server.set('port', port)
  .listen(port, (err) => {
    if (err) throw err;
    console.log('Listening on port:', 3000, '\n');
  });

export default server;
