import m, { prop } from 'mithril';
import { head } from '../components';

// VIEW MODEL
const vm = {
  init: () =>
    vm.bandName = prop('Captain Trey and the Peppy Peters'),
};

// VIEW
const view = data =>
  m('html', [
          head,
          m('body', [
            m('#pageone', [
              bandInfo(data),
            ]),
          ]),
        ]);

// COMPONENTS
const bandInfo = ()=>
  m('.bandInfo', [
    m('h1', vm.bandName()),
  ]);

// CONTROLER
const controller = () => vm.init();

// EXPORT
export default {
  vm,
	view,
  controller,
};
