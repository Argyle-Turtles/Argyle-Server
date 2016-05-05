// pages
import * as tab from './tablet';
import projector from './projector';

import station from  './soundStation';
import code from './tablet/code';
import mix from './tablet/mix';
import one from './tablet/one';
import two from './tablet/two';
import three from './tablet/three';
import four from './tablet/four';

import socket from './socket/SocketListener';
import home from './home';


export default {
  '/': home,
  '/tablet/': code,
  '/tablet/mix/:usercode': mix,
  '/tablet/one': one,
  '/tablet/two': two,
  '/tablet/three': three,
  '/tablet/four': four,
  '/projector/': projector.start,
  '/socket/': socket,
  '/soundStation/': station.pageOne,
  '/soundStation/two': station.pageTwo,
  '/soundStation/three': station.pageThree,

};
