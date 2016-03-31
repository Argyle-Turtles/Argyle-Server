// pages
import * as tab from './tablet';
import projector from './projector';

export default {
  '/tablet/': tab.stageOne,
  '/tablet/two': tab.stageTwo,
  '/tablet/three': tab.stageThree,
  '/tablet/four': tab.stageFour,
  '/tablet/five': tab.stageFive,
  '/projector/': projector.start,
  '/projector/two': projector.two,
};
