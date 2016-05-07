// pages
import projector from './projector';

import station from './soundStation';
import code from './tablet/code';
import mix from './tablet/mix';
import one from './tablet/one';
import two from './tablet/two';
import three from './tablet/three';
import four from './tablet/four';
import five from './tablet/five';

import socket from './socket/SocketListener';
import home from './home';


export default {
  '/': home,
  '/tablet/': code,
  '/tablet/mix/:usercode': mix,
  '/tablet/one/:usercode': one,
  '/tablet/two/:usercode': two,
  '/tablet/three/:usercode': three,
  '/tablet/four/:usercode': four,
  '/tablet/five/:usercode': five,
  '/projector/:case': projector.start,
  '/socket/': socket,
  '/soundStation/': station.pageOne,
  '/soundStation/two': station.pageTwo,
  '/soundStation/three': station.pageThree,

};
