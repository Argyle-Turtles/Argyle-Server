import m from 'mithril';

import * as tab from './tablet';
require('../../assets/css/main.scss');

m.route.mode = "hash";

m.route(document, "/", {
    "/tablet/": tab.stageOne,
    "/tablet/two": tab.stageTwo,
    "/tablet/three": tab.stageThree,
    "/tablet/four": tab.stageFour,
    "/tablet/five": tab.stageFive
});
