// pages
import * as tab from './tablet';
import projector from './projector';
import home from './home';

export default {
  '/': home,
  '/tablet/': tab.stageOne,
  '/tablet/mix': tab.myMix,
  '/tablet/two': tab.stageTwo,
  '/tablet/three': tab.stageThree,
  '/tablet/four': tab.stageFour,
  '/tablet/five': tab.stageFive,
  '/projector/': projector.start,
  '/projector/two': projector.two,
  '/projector/three': projector.three,
};
