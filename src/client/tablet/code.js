import m, { prop } from 'mithril';


import {Head} from '../components';

const view = () =>
	<html>
		<Head />
		<body>
			<div className='banner'>
				<input
            		className="button is-medium container"
            		type="button"
            		onclick={ function(){document.location.href='https://accounts.spotify.com:/authorize?client_id=b5dc615d0bcc47109e0ea1c5725f1cb8&response_type=token&redirect_uri=http://localhost:3000/?/tablet/&scope=playlist-modify-private playlist-modify-public&show_dialog=false';}}
            		value="Autorize" />
            	<div>Enter your code</div>
            </div>
            <div class="conent">
            	<div>"Enter the code from the sticker....newly-created playlist!"</div>
            	<input
            		type="text" />
            	<br/>
            	<input
            		className="button is-medium container"
            		type="button"
            		onclick={function(){location.search = "/tablet/mix"}}
            		value="Rock On!" />
            </div>
        </body>
    </html>;

export default {
  view
};
      