import m, { prop } from 'mithril';

import {Head} from '../components';

import Graph from './components/graph';

const view = () =>
	<html>
		<Head />
		<body>
			<div className="banner">mixy tape</div>
			<div className = "content">
				<Graph />
				<div className="cards"> Cards go here </div>
				<input 
					className="button is-medium container"
					type="button"
            		onclick={function(){location.search = '/tablet/one'}}
            		value="Rock On!" />
            </div>
        </body>
    </html>;

export default {
  view
};