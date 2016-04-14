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
            		onclick={ function(){location.search="/tablet/one";}}
            		value="back" />
            		<div>My Mixtape</div>
            	</div>
            	<div className="content">
            		<div>Keep yo sticka</div>
            		<div> Remove yo sticka with yo code</div>
            		<input
            		className="button is-medium container"
            		type="button"
            		onclick={ function(){location.search="/tablet/three";}}
            		value="next" />
            	</div>
            </div>
        </body>
    </html>;

export default{
	view
};

