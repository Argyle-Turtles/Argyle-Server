import m, { prop } from 'mithril';

import {Head} from '../components';

const view = () =>
	<html>
		<Head />
		<body>
			<div className="swipes">
				<div className="banner">
					<input
            		className="button is-medium container"
            		type="button"
            		onclick={ function(){location.search="/tablet/three";}}
            		value="back" />
            		<div>My Mixtape</div>
            	</div>
            	<div className="content">
            		<div>Enjoy your mix</div>
            		<div>Follow the sticker instructions to add the playlist...</div>
            	</div>
            </div>
        </body>
    </html>;

export default{
	view
};