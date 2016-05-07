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

const artistSongs = {
  elvis: [
    {
      album: 'Can’t Help Falling in Love',
      name: 'Blue Hawaii',
      year: '1961',
      length: '3:00',
      description: `‘Can't Help Falling in Love’ is a pop ballad sung to the melody of the 1784 French love song, ‘Plaisir d'amour’. The song was featured in Elvis Presley's 1961 film, Blue Hawaii.`,
      uri: 'spotify:track:44AyOl4qVkzS48vBsbNXaC',
      img: 'https://i.scdn.co/image/479ec1fcd836348926b576260b5be92503f8b0a4',
    },
    {
      album: 'Jailhouse Rock',
      name: 'Jailhouse Rock',
      year: '1958',
      length: '2:26',
      description: `In ‘Jailhouse Rock’ Elvis sings of prisoners at a jailhouse getting their groove on to some rock and roll. His energized vocals paired with catchy guitar riff are emblematic of the early rock and roll tunes of the time.`,
      uri: 'spotify:track:4gphxUgq0JSFv2BCLhNDiE',
      img: 'https://i.scdn.co/image/97f150dc58d9900133e895f8e61e2087621dccdc',
    },
    {
      album: 'Suspicious Minds',
      name: 'Back in Memphis',
      year: '1969',
      length: '4:24',
      description: `‘Suspicious Minds’ is one of Presley’s later hits. The song is about a mistrusting and dysfunctional relationship, and the need of the characters to overcome their issues in order to maintain it.`,
      uri: 'spotify:track:1OtWwtGFPXVhdAVKZHwrNF',
      img: 'https://i.scdn.co/image/5f52605ad70e4ee4d79fce461d94b6f6142e24ef',
    },
  ],

  peppers: [
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
      description: `‘Snow (Hey Oh)’ is a characteristically soft, melodic song, driven by a rapid guitar riff by John Frusciante. Vocalist Anthony Kiedis states that the track is "about surviving, starting fresh. I've made a mess of everything, but I have a blank slate—a canvas of snow—and I get to start over." `,
      uri: 'spotify:track:2aibwv5hGXSgw7Yru8IYTO',
      img: 'https://i.scdn.co/image/60257f94086dfdcaa9730d3959aab66e1ce89f7d',
    },
    {
      album: 'Californication',
      name: 'Californication',
      year: '1999',
      length: '5:30',
      description: `‘Californication’ has remained one of the Red Hot Chili Peppers’ most popular and most performed songs, appearing in almost every setlist since its release. The song is mainly about the dark side of Hollywood and the export of culture through the movie industry.`,
      uri: 'spotify:track:34KTEhpPjq6IAgQg2yzJAL',
      img: 'https://i.scdn.co/image/260c7a6da14bb13a4cc9e75bf5b549fb87fa22a9',
    },
  ],
};

// VIEW MODEL
const vm = {
  init: () => {
    vm.songCards = m.prop(artistSongs[m.route.param('case')]);
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

    Spotify.getSongPreview(artistSongs[m.route.param('case')][id].uri.split(':')[2])
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
      <div className="card-holder selection-holder">
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
