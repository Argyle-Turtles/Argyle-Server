// Import outside libaries
import express from 'express';
import router from 'express-enrouten';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import socketIO from 'socket.io';
import http from 'http';

import routes from './src/server/routes';
import config from './src/server/config';
import db from './src/server/services/database';
import SocketHandler from './src/server/SocketHandler';

db(config.mongoURL);

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

server.use('**/assets', express.static(path.resolve(`${__dirname}/assets`)));

server.get('/homepage', (req, res) =>
  res.sendFile(path.join(__dirname + '/homepage/index.html')));

const socketHTTP = http.createServer(server).listen('3001');
const io = socketIO(socketHTTP, { origins: '*:*' });
SocketHandler.init(io);

// Start server
server.set('port', port)
  .listen(port, (err) => {
    if (err) throw err;
    console.log('Listening on port:', 3000, '\n');
  });

export default server;
