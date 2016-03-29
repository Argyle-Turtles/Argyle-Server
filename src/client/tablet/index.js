import m from 'mithril';

import { head } from '../components';
// client entry file

export const stageOne = {
	view: function(){
		return m("html",[
							head,
              m("body",[
                m(".stageOne",[
                	m(".banner",[
                		m("div","Enter Your Code")
                	]),
                	m(".content",[
                		m("div","Enter the code from the sticker....newly-created playlist!"),
                		m("input",{type:"text"}),
                		m("br"),
                		m("input",{type:"text"},"My Mixtape"),
                		m("br"),
                		m("button",{onclick:function(e){location.hash = "/tablet/two"}},"Rock On!")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageTwo = {
	view: function(){
		return m("html",[
							head,
              m("body",[
                m(".stageTwo",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/tablet/"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Congrats!"),
                		m("div","We have saved your Mixtape to a spotify playlist..."),
                		m("button",{onclick:function(e){location.hash = "/tablet/three"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageThree = {
	view: function(){
		return m("html",[
							head,
              m("body",[
                m(".stageThree",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/tablet/two"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Keep Your sticker!"),
                		m("div","Remove the sticker with your code...."),
                		m("button",{onclick:function(e){location.hash = "/tablet/four"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageFour = {
	view: function(){
		return m("html",[
							head,
              m("body",[
                m(".stageFour",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/tablet/three"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Return the tape"),
                		m("div","Drop off the mixtape as you exit...."),
                		m("button",{onclick:function(e){location.hash = "/tablet/five"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageFive= {
	view: function(){
		return m("html",[
							head,
              m("body",[
                m(".stageFive",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/tablet/four"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Enjoy your mix"),
                		m("div","Follow the sticker instructions to add the playlist...")
                	]),
                ]),
              ]),
            ]);
	}
};
