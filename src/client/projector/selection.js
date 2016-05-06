import m from 'mithril';
import R from 'ramda';
import Velocity from 'velocity-animate';

import { Spotify, SongPreview } from '../components';
import SongCard from './components/SongCard';
import { selectCard, deselectCard, fadeCardOut, moveAddedCard } from './animations';

const addedSongs = [null, null, null];

const selectedSongs = () => R.filter(e => R.not(R.isNil(e)), addedSongs);

const addSongToPlaylist = (id, uri) => addedSongs[id] = uri;
const removeFromPlaylist = (id) => addedSongs[id] = null;

const songData = [
  {
    album: 'One Hot Minute',
    name: 'Aeroplane',
    year: '1995',
    length: '4:45',
    description: "Despite its dark lyrical themes, Aeroplane is one of the more accessible and upbeat songs on One Hot Minute, with a funk slap bass line and child choral vocals from Flea's (bassist) daughter and her classmates.",
    uri: 'spotify:track:0VLdJcQUsqHBBwqPp4CIKJ',
    img: 'https://i.scdn.co/image/010e335a53b768865080a6ea39b0a979d2e54b24',
  },
  {
    album: 'Stadium Arcadium',
    name: 'Snow (Hey Oh)',
    year: '2006',
    length: '5:35',
    description: 'Trey loves this funkadelic stuff, he tells his grandma about it every sunday',
    uri: 'spotify:track:2aibwv5hGXSgw7Yru8IYTO',
    img: 'https://i.scdn.co/image/60257f94086dfdcaa9730d3959aab66e1ce89f7d',
  },
  {
    album: 'Californication',
    name: 'Californication',
    year: '1999',
    length: '5:30',
    description: 'Bring it home with some fucktastic sounds',
    uri: 'spotify:track:34KTEhpPjq6IAgQg2yzJAL',
    img: 'https://i.scdn.co/image/260c7a6da14bb13a4cc9e75bf5b549fb87fa22a9',
  },
];

// VIEW MODEL
const vm = {
  init: () => {
    vm.songCards = m.prop(songData);
    vm.firstRender = m.prop(true);
    vm.scanMode = false;
  },
};

const animateIn = () => {
  const time = vm.firstRender() ? 1 : 0;
  Velocity.animate(
    document.querySelector('#card-0'),
    {
      opacity: 1,
      // translateY: -20,
    },
    { duration: 500 * time });

  Velocity.animate(
    document.querySelector('#card-1'),
    {
      opacity: 1,
      // translateY: -20,
    },
    { delay: 200 * time, duration: 500 * time });

  Velocity.animate(
    document.querySelector('#card-2'),
    {
      opacity: 1,
      // translateY: -20,
    },
    { delay: 400 * time, duration: 500 * time });

  vm.firstRender(false);
};

const animateCardAdd = () => {
  R.map(button => Velocity(button, 'fadeOut', 500),
    document.querySelectorAll('.song-card-button, .flip-button'));

  vm.scanMode = true;

  addedSongs.map((song, index) => {
    deselectCard(index)();
    return R.isNil(song) ? fadeCardOut(index) : moveAddedCard(index);
  });
};

const reverseAnimateCardAdd = () => {
  R.map(button => Velocity(button, 'fadeIn', 500),
    document.querySelectorAll('.song-card-button, .flip-button'));

  vm.scanMode = false;

  addedSongs.map((song, index) => {
    deselectCard(index)();
    document.querySelector(`#card-${index}`).style.display = 'inline-block';
    Velocity(
      document.querySelector(`#card-${index}`),
      { opacity: 1, translateY: -20 },
      500);
  });
};

const pickACard = id => () => {
  if (!vm.scanMode) {
    [0, 1, 2].map(index => id === index ? selectCard(index)() : deselectCard(index)());

    Spotify.getSongPreview(songData[id].uri.split(':')[2])
    .then(track => SongPreview.setAudioSource(track));
  }
};

// VIEWS
const createCard = (data, id) =>
  <div id={`card-${id}`} className="song-card invis" onclick={pickACard(id)}>
    <SongCard
      song={data}
      cardId={id}
      selectThis={selectCard}
      addSong={addSongToPlaylist}
      removeSong={removeFromPlaylist}
      preview={SongPreview}/>
  </div>;

const view = () =>
    <div id="selection" config={animateIn}>
      <SongPreview />
      <div className="card-holder">
        {
          vm.songCards().map(
          (card, i) => createCard(card, i))
        }
      </div>
    </div>;

// CONTROLLER
const controller = () => vm.init();

// EXPORT
export default {
  vm,
  view,
  controller,
  animateCardAdd,
  reverseAnimateCardAdd,
  selectedSongs,
};
