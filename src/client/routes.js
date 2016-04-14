// pages
import * as tab from './tablet';
import projector from './projector';
import code from './tablet/code';
import mix from './tablet/mix';
import one from './tablet/one';
import two from './tablet/two';
import three from './tablet/three';
import four from './tablet/four';

export default {
  '/tablet/': code,
  '/tablet/mix':mix,
  '/tablet/one': one,
  '/tablet/two': two,
  '/tablet/three': three,
  '/tablet/four': four,
  '/projector/': projector.start,
  '/projector/two': projector.two,
};
