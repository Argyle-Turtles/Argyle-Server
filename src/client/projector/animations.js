import Velocity from 'velocity-animate';
import Promise from 'bluebird';

import BandInfo from './components/BandInfo';

const animateTitle = () =>
  Velocity.animate(
    document.querySelector('.band-name'),
    {
      fontSize: '30px',
      translateY: -50,
    },
    { duration: 500 });

export const transition1 = () =>
  Promise.all([
    BandInfo.animate(),
    animateTitle(),
  ]);
