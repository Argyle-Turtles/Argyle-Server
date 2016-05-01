import Velocity from 'velocity-animate';
import Promise from 'bluebird';

import BandInfo from './components/BandInfo';
import Selection from './selection';

const animateTitle = () =>
  Velocity.animate(
    document.querySelector('.band-name'),
    {
      fontSize: '30px',
      translateY: -180,
    },
    { duration: 500 });

export const transition1 = () =>
  Promise.all([
    BandInfo.animate(),
    animateTitle(),
  ]);

export const transition2 = () =>
  Promise.all([
    Selection.animateOut(),
  ]);
