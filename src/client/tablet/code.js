import m, { prop } from 'mithril';


import {Head} from '../components';

import funimations from './endAnimations';

let fourDigetCode = "";

const view = () =>
	<html className="endKiosk" config={function(){

    }}>
		<Head />
		<body>
			<div className='banner'>
                <div className="bannerText">
            	   <div className="bannerTitle">Enter your code</div>
                </div>
                <img className="imgAsset" src="../../../assets/img/0.png" width="325" height="275"></img>
            </div>
            <div class="conent">
                <div className="contentText">
                	<div className="contentDesc">Enter the code from the sticker on your cassette in order to access your newly-created playlist!</div>
                    <div className="contentInput">
                    	<input
                            className="codeInput"
                            id="userCode"
                    		type="text"
                            placeholder="Code"
                            maxlength="4"
                         />
                    	<br/>
                    </div>
                    <div className="contentCodeButton"
                        config={function () {
                            document.getElementById("userCode").onkeypress = function(){
                                fourDigetCode = document.getElementById("userCode").value;
                                if(fourDigetCode.length >= 3){
                                    document.querySelector(".firstButton").style.opacity = 1;
                                }
                                else{
                                    document.querySelector(".firstButton").style.opacity = .25; 
                                }
                            }
                        }}

                    >
                    	<div
                            id="endButton"
                            className = "firstButton"
                    		type="button"
                    		onclick={function(){
                                const str = document.getElementById("userCode").value;
                                fourDigetCode = str.toUpperCase();
                                if(fourDigetCode.length == 4){
                                    funimations.fadeOutNewRoute("/tablet/mix/"+fourDigetCode+"");
                                }
                            
                            }}
                    	>
                        <div>Rock On!</div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>;

export default {
  view,
};
      