// it begins here
import Leap from 'leapjs';
import { find, propEq, allPass } from 'ramda';

const mmToPx = val => val * 3.779528;

export const Screen = function (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  // Map values to pixel coordinates
  this.xMap = width;
  this.yMap = height;

  this.mapTouch = (xTouch, yTouch) =>
    ({
      x: xTouch / this.width * this.xMap,
      y: yTouch / this.height * this.yMap,
    });
};

const getIndexFinger = find(propEq('type', 1));

const halfHeight = 139.7;
const halfWidth = 190.5;
const below = 50.8;

const breakPlane = finger => (finger.extended && finger.dipPosition[2] < -35);
const xBound = x => (Math.abs(x) < halfWidth);
const yBound = y => (y - below < halfHeight * 2);

const getScreenPos = ({ dipPosition }) => ({
  x: mmToPx(dipPosition[0] + halfWidth),
  y: mmToPx((halfHeight * 2) - dipPosition[1]),
});

const inBounds = ({ dipPosition }) => (xBound(dipPosition[0]) && yBound(dipPosition[1]));

const isTouch = finger => allPass([breakPlane, inBounds])(finger);

export const init = (touchHandler, moveHandler) => {
  try {
    Leap.loop({
      hand: ({ fingers }) => {
        const f = getIndexFinger(fingers);
        return isTouch(f) ? touchHandler(getScreenPos(f)) : moveHandler(getScreenPos(f));
      },
    });
  }
  catch (e) {
    console.log(e);
  }
};

export default {
  init,
};
