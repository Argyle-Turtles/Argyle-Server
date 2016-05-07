import m, { prop } from 'mithril';

import {Head} from '../components';

import Circle from './components/circles';

import Hammer from "hammerjs";

import Velocity from 'velocity-animate';

import funimations from './endAnimations';

const vm = {
  init: () => {
    vm.circleFill = ["#eeeeee","transparent","transparent","transparent"];
  },
};


const view = () =>
	<html className="endKiosk" config={function(){
        funimations.fadeIn();
        const element = document.querySelector(".endKiosk");
        const hammerTime = new Hammer(element).on("swipeleft", function(e){
           //funimations.fadeOut("two");
           funimations.slideOut("two");
            //location.search = "/tablet/two/"+m.route.param("usercode")+"";
        });
    }}>
		<Head />
		<body>
			<div className="swipes">
				<div className="banner">
                    <div className="bannerText">
                        <div className="backButton" onclick={function(){funimations.fadeOut("mix");}}>
                            <img className="backArrow" src="../../src/client/tablet/assets/back_arrow_white.png" height="35" width="35"/>
                            Back 
                        </div>
                        <div className="bannerTitle"> Mita-{m.route.param("usercode")}</div>
                    </div>
                     <img className="imgAsset" src="../../../assets/img/1.png" width="325" height="275"></img>
            	</div>
            	<div class="conent">
                    <div className="contentText">
                        <div className="contentDesc">
                            <div id="black"> Congrats!</div>
                            <div> We have saved your mixtape to a spotify playlist,</div>
                            <div> so you can access it at any time </div>
                        </div>
                        <div className="contentButton" config={function(){ Circle.init(".circles",vm.circleFill);}}>
                            <div className="circles"></div>
                                <div className="lowOpacity">
                                    <div
                                        id="endButton"
                                        type="button">
                                        <div>Finish Tour</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>

const controller = () => {
  vm.init();
};

export default{
    vm,
    view,
    controller,
};