import m, { prop } from 'mithril';


import {Head} from '../components';

let fourDigetCode = "";

const view = () =>
	<html className="endKiosk">
		<Head />
		<body>
			<div className='banner'>
            	<div className="bannerTitle">Enter your code</div>
                <img className="imgAsset" src="https://placeholdit.imgix.net/~text?txtsize=41&txt=450%C3%97350&w=225&h=175"></img>
            </div>
            <div class="conent">
                <div className="contentText">
                	<div className="contentDesc">Enter the code from the sticker on your cassette in order to access your newly-created playlist!</div>
                    <div className="contentInput">
                    	<input
                            id="userCode"
                    		type="text"
                            placeholder="Code"
                            maxlength="4"
                         />
                    	<br/>
                        <div>Confirmed!</div>
                    </div>
                    <div className="contentButton">
                    	<input
                    		className="button is-medium container"
                            id="endButton"
                    		type="button"
                    		onclick={function(){
                                fourDigetCode = document.getElementById("userCode").value;
                                location.search = "/tablet/mix/"+fourDigetCode+"";
                            }}

                    		value="Rock On!" />
                    </div>
                </div>
            </div>
        </body>
    </html>;

export default {
  view,
};
      