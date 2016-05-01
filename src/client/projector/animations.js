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
    Selection.animateCardAdd(),
    hideNextButton(),
  ]);

export const selectCard = id => () => {
  const changeSize = element => Velocity(element, { width: '400px' }, 500);

  changeSize(document.querySelector(`#card-${id}`));
  changeSize(document.querySelector(`#flip-box-${id}`));
  changeSize(document.querySelector(`#front-${id}`));
  changeSize(document.querySelector(`#back-${id}`));
};

export const deselectCard = id => () => {
  const changeSize = element => Velocity(element, { width: '300px' }, 500);

  changeSize(document.querySelector(`#card-${id}`));
  changeSize(document.querySelector(`#flip-box-${id}`));
  changeSize(document.querySelector(`#front-${id}`));
  changeSize(document.querySelector(`#back-${id}`));
};

export const fadeCardOut = id =>
  Velocity(
    document.querySelector(`#card-${id}`),
    { opacity: 0, width: 0, translateY: -60 },
    500)
    .then(() => document.querySelector(`#card-${id}`).style.display = 'none');

export const moveAddedCard = id =>
  Velocity(
    document.querySelector(`#card-${id}`),
    { translateY: -100 },
    1000
  ).then(e => Velocity(e, { translateY: [-20, -100] }, 300));
