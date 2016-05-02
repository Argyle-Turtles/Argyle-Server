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

export const fadeToText = (id, newText) =>
  Velocity(
    document.querySelector(id),
    { colorAlpha: 0 },
    { duration: 600 })
  .then(() => {
    const textArea = document.querySelector(id);
    textArea.innerHTML = newText;

    return Velocity(textArea, { colorAlpha: 1 }, { delay: 100, duration: 600 });
  });

const changeCardSize = (size, time) => element =>
  Velocity(element, { width: size }, time);

export const selectCard = id => () => {
  const changeSize = changeCardSize('400px', 500);

  changeSize(document.querySelector(`#card-${id}`));
  changeSize(document.querySelector(`#flip-box-${id}`));
  changeSize(document.querySelector(`#front-${id}`));
  changeSize(document.querySelector(`#back-${id}`));
};

export const deselectCard = id => () => {
  const changeSize = changeCardSize('300px', 500);

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
    1000)

  .then(e => {
    const changeSize = element =>
      Velocity(element, { width: '200px' }, { delay: 100, duration: 300 });

    changeSize(document.querySelector(`#flip-box-${id}`));
    changeSize(document.querySelector(`#front-${id}`));
    changeSize(document.querySelector(`#back-${id}`));

    Velocity(
      document.querySelector('#rfid-feedback'),
      { opacity: 1 },
      { delay: 200, duration: 300 });
    return Velocity(e, { width: '200px', translateY: 100 }, { delay: 100, duration: 300 });
  });

export const animateSlideOut = () => {
  const removeWidth = element =>
    Velocity(
      element,
      {
        width: 0,
        translateX: -100,
        marginLeft: '3px',
        marginRight: '3px',
      },
      300)
    .then(e => Velocity(e, { translateY: 40 }, { delay: 50, duration: 200 }))
    .then(e => Velocity(e, { translateY: 3000 }, { delay: 150, duration: 400 }));


  return Promise.all([
    removeWidth(document.querySelector(`#card-0`)),
    removeWidth(document.querySelector(`#card-1`)),
    removeWidth(document.querySelector(`#card-2`)),
  ])

  .then(() => fadeToText('#rfid-feedback', 'Added!'));
};

// MAIN TRANSITIONS
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

export const transition3 = () =>
  Promise.all([
    animateSlideOut(),
  ]);

export const transition4 = () =>
  Promise.all([
    fadeCardOut('artist-0'),
    fadeCardOut('artist-1'),
    fadeCardOut('artist-2'),
  ]);
