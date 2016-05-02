import R from 'ramda';

let id;

/**
 * parse keypress event and return actual key value.
 * returns null if key is not number or enter
 *
 * @return {string} : key value or null
 */
const parseKey = ({ charCode }) => {
  const key = charCode === 13 ? 13 : String.fromCharCode(charCode);
  return !isNaN(key) && key;
};

/* capture key input, if enter is pressed call RFID callback with current id */
const readKey = (next, key) => {
  const submit = () => {
    next(id);
    id = '';
  };

  return (!key === false) && ((key === 13) ? submit() : id += key);
};

export const init = next => {
  id = '';
  window.onkeypress = R.compose(R.curry(readKey)(next), parseKey);
  console.log('hello');
};

export default {
  init,
};
