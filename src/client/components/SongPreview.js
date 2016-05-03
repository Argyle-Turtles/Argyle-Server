import m from 'mithril';

// mithril stuff
const vm = {
  init: () =>
    vm.source = m.prop('https://p.scdn.co/mp3-preview/934da7155ec15deb326635d69d050543ecbee2b4'),
};

/** Plays current audio */
const playAudio = () => document.querySelector('#preview-audio').play();

/** Pauses current audio */
const pauseAudio = () => document.querySelector('#preview-audio').pause();

/** Sets audio source */
const setAudioSource = newUrl => vm.source(newUrl);

const view = () => <audio id="preview-audio" src={vm.source()}></audio>;

const controller = () => vm.init();

export default {
  vm,
  view,
  controller,
  playAudio,
  pauseAudio,
  setAudioSource,
};
