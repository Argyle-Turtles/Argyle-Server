import m from 'mithril';
import { head } from '../components';

const view = () =>
  m("html", [
          head,
          m("body", [
            m(".stageOne", [
              m(".banner", [
                m("div", "Enter Your Code")
              ]),
            ]),
          ]),
        ]);

export const stageOne = {
	view: function() {
		return
	}
};
