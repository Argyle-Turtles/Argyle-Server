import m, { prop } from 'mithril';

import {Head} from '../components';

const view = () =>
	<html className="endKiosk">
		<Head />
		<body>
			<div className="swipes">
				<div className="banner">
					<div
					className="backButton"
            		onclick={function(){location.search = "/tablet/mix"}}>
                     Back </div>
            		<div>My Mixtape</div>
            	</div>
            	<div className="content">
            		<div>Congrats!</div>
            		<div>We've saved your mixtape to a Spotify playlist, so you can access it any time</div>
            		<input 
					className="button is-medium container"
                    id = "endKioskButton"
					type="button"
            		onclick={function(){location.search = "/tablet/two"}}
            		value="Take on the world!" />
            	</div>
            </div>
        </body>
    </html>

export default{
	view
};