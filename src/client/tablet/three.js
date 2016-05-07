import m, { prop } from 'mithril';

import {Head} from '../components';

import Circle from './components/circles';

import funimations from './endAnimations';

const vm = {
  init: () => {
    vm.circleFill = ["transparent","transparent","#eeeeee","transparent"];
  },
};

const view = () =>
    <html className="endKiosk"config={function(){
        funimations.fadeIn();
        const element = document.querySelector(".endKiosk");
        const hammerTimeLeft = new Hammer(element).on("swipeleft", function(e){
            //location.search = "/tablet/four/"+m.route.param("usercode")+"";
            funimations.fadeOut("four");
        });
        const hammerTimeRight = new Hammer(element).on("swiperight", function(e){
            //location.search = "/tablet/two/"+m.route.param("usercode")+"";
            funimations.fadeOut("two");
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
                        <div className="bannerTitle"> Mixta-{m.route.param("usercode")}</div>
                    </div>
                     <img className="imgAsset" src="../../../assets/img/3.png" width="325" height="275"></img>
                </div>
                <div class="conent">
                    <div className="contentText">
                        <div className="contentDesc">
                            <div id="black">Enjoy yo' mix!</div>
                            <div>Just follow the instructions on your code card</div>
                            <div>to favorite the playlist and add it to your spotify account.</div>
                        </div>
                        <div className="contentButton" config={function(){ Circle.init(".circles",vm.circleFill);}}>
                            <div className="circles"></div>
                            <div className="lowOpacity">
                                    <div
                                        id="endButton"
                                        type="button"
                                    >
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