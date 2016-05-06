import m, { prop } from 'mithril';

import {Head} from '../components';

import Circle from './components/circles';

const vm = {
  init: () => {
    vm.circleFill = ["transparent","transparent","#eeeeee","transparent"];
  },
};

const view = () =>
    <html className="endKiosk">
        <Head />
        <body>
            <div className="swipes">
                <div className="banner">
                    <div className="bannerText">
                        <div className="backButton" onclick={function(){location.search = "/tablet/mix/"+m.route.param("usercode")+""}}>
                            <img className="backArrow" src="../../src/client/tablet/assets/back_arrow_white.png" height="35" width="35"/>
                            Back 
                        </div>
                        <div className="bannerTitle"> Mita-{m.route.param("usercode")}</div>
                    </div>
                     <img className="imgAsset" src="https://placeholdit.imgix.net/~text?txtsize=41&txt=450%C3%97350&w=225&h=175"></img>
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
                                        onclick={function(){
                                            location.search = "/tablet/two/"+m.route.param("usercode")+"";
                                        }}
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