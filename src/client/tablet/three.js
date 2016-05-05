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
            		onclick={ function(){location.search="/tablet/two";}}
            		value="back" />
            		<div>My Mixtape</div>
            	</div>
            	<div className="content">
            		<div>Return the tape</div>
            		<div>Drop off the mixtape as you exit....</div>
            		<input
            		className="button is-medium container"
            		type="button"
            		onclick={ function(){location.search="/tablet/four";}}
            		value="next" />
            	</div>
            </div>
        </body>
    </html>;

export default{
	view
};
