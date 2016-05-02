// pages
import * as tab from './tablet';
import projector from './projector';
import station from  './soundStation';
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
  '/projector/': projector.start, 
  '/soundStation/': station.pageOne,
  '/soundStation/two': station.pageTwo,
  '/soundStation/three': station.three,

}

