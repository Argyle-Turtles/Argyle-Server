// pages
import * as tab from './tablet';
import projector from './projector';
import station from  './soundStation';
import socket from './socket/SocketListener';
import home from './home';

console.log(station);

export default {
  '/': home,
  '/tablet/': tab.stageOne,
  '/tablet/mix': tab.myMix,
  '/tablet/two': tab.stageTwo,
  '/tablet/three': tab.stageThree,
  '/tablet/four': tab.stageFour,
  '/tablet/five': tab.stageFive,
<<<<<<< HEAD
  '/projector/': projector.start, 
    '/socket/': socket,
  '/soundStation/': station.pageOne,
  '/soundStation/two': station.pageTwo,
  '/soundStation/three': station.pageThree,

}


