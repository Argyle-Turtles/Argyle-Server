import m from 'mithril';

import routes from './routes';

// oh webpack you sultry son-of-a-dev
require('../../assets/css/main.scss');

m.route.mode = 'search';

m.route(document, '/', routes);
