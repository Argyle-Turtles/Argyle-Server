import m, { prop } from 'mithril';


import {Head} from '../components';

const view = () =>
	<html>
		<Head />
		<body>
			<div className='banner'>
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
      