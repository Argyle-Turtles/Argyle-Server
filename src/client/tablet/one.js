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
            		onclick={function(){location.search = "/tablet/mix"}}
            		value="Back" />
            		<div>My Mixtape</div>
            	</div>
            	<div className="content">
            		<div>Congrats!</div>
            		<div>"We have saved your Mixtape to a spotify playlist..."</div>
            		<input 
					className="button is-medium container"
					type="button"
            		onclick={function(){location.search = "/tablet/two"}}
            		value="Next" />
            	</div>
            </div>
        </body>
    </html>

export default{
	view
};