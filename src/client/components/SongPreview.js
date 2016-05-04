import m from 'mithril';

const isAudioReady = () => document.querySelector('#preview-audio').readyState === 4;

/** Plays current audio */
const playAudio = () => {
  const element = document.querySelector('#preview-audio');
  if (isAudioReady()) element.play();
  else element.onloadeddata = () => element.play();
};

/** Pauses current audio */
const pauseAudio = () => document.querySelector('#preview-audio').pause();

/** Sets audio source */
const setAudioSource = newUrl => document.querySelector('#preview-audio').src = newUrl;

const view = () => <audio id="preview-audio" src="https://p.scdn.co/mp3-preview/934da7155ec15deb326635d69d050543ecbee2b4"></audio>;

export default {
  view,
  playAudio,
  pauseAudio,
  setAudioSource,
};
