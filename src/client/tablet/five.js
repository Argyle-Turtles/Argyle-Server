import m, { prop } from 'mithril';

import {Head} from '../components';

import Circle from './components/circles';


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
                        <div className="bannerTitle">Peace Out Mother fuckers!</div>
                    </div>
                     <img className="imgAsset" src="https://placeholdit.imgix.net/~text?txtsize=41&txt=450%C3%97350&w=225&h=175"></img>
            	</div>
            </div>
        </body>
    </html>


export default{
    view
};