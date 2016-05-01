import m, { prop } from 'mithril';


import {Head} from '../components';

const view = () =>
	<html className="endKiosk">
		<Head />
		<body>
			<div className='banner'>
            	<div>Enter your code</div>
            </div>
            <div class="conent">
            	<div>Enter the code from the sticker on your cassette in order to access your newly-created playlist!</div>
            	<input
            		type="text"
                    placeholder="Code"
                 />
            	<br/>
            	<input
            		className="button is-medium container"
                    id="endButton"
            		type="button"
            		onclick={function(){location.search = "/tablet/mix"}}
            		value="Rock On!" />
            </div>
        </body>
    </html>;

export default {
  view
};
      