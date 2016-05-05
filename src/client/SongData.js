import R from 'ramda';

const allData = [
  {
    album: 'We Like it Here',
    name: 'Shofukan',
    year: '2014',
    length: '6:33',
    description: 'This is some smooth funkalucious stuff right here',
    uri: 'spotify:track:5v0Q1mWIWd5XYtto97VUZy',
    img: 'http://placehold.it/433x433',
    artist: 'Peter',
    genre: "Alternative, maybe",
    remove: "spotify:track:5v0Q1mWIWd5XYtto97VUZy",
  },
  {
    album: 'We Like it Here',
    name: 'What About Me?',
    year: '2014',
    length: '6:43',
    description: 'Trey loves this fuckadelic stuff, he tells his grandma about it every sunday',
    uri: 'spotify:track:4YpXSKVrp8jhI7EAPV1xpF',
    img: 'http://placehold.it/433x433',
    artist: 'Peter',
    genre: "Alternative, maybe",
    remove: "spotify:track:4YpXSKVrp8jhI7EAPV1xpF",
  },
  {
    album: 'We Like it Here',
    name: 'Tia Macaco',
    year: '2014',
    length: '5:44',
    description: 'Bring it home with some fucktastic sounds',
    uri: 'spotify:track:7DsEr8IEmhZYgAaHHwELwa',
    img: 'http://placehold.it/433x433',
    artist: 'Peter',
    genre: "Alternative, maybe",
    remove: "spotify:track:7DsEr8IEmhZYgAaHHwELwa",
  },
];

export const getDataFromURIS = currentURIS =>
  R.filter(({ uri }) => R.contains(uri, currentURIS), allData);

export default allData;
