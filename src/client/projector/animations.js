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

const hideNextButton = () =>
  Velocity.animate(
    document.querySelector('.bottom-button'),
    {
      opacity: 0,
    },
    { duration: 500 });

export const transition1 = () =>
  Promise.all([
    BandInfo.animate(),
    animateTitle(),
  ]);

export const transition2 = () =>
  Promise.all([
    Selection.animateCards(),
    hideNextButton(),
  ]);

export const selectCard = id => () => {
  const changeSize = element => Velocity(element, { width: '400px' }, 500);

  changeSize(document.querySelector(`#flip-box-${id}`));
  changeSize(document.querySelector(`#front-${id}`));
  changeSize(document.querySelector(`#back-${id}`));
};

export const deselectCard = id => () => {
  const changeSize = element => Velocity(element, { width: '300px' }, 500);

  changeSize(document.querySelector(`#flip-box-${id}`));
  changeSize(document.querySelector(`#front-${id}`));
  changeSize(document.querySelector(`#back-${id}`));
};
