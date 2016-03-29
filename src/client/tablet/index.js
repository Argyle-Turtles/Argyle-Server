import m from 'mithril';
// client entry file

export const stageOne = {
	view: function(){
		return m("html",[
							 m("head", [
    					 	m("link[href='./build/css/main.css'][rel=stylesheet]")
  						]),
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
                		m("button",{onclick:function(e){location.hash = "/two"}},"Rock On!")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageTwo = {
	view: function(){
		return m("html",[
							m("head", [
    					 	m("link[href='./build/css/main.css'][rel=stylesheet]")
  						]),
              m("body",[
                m(".stageTwo",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Congrats!"),
                		m("div","We have saved your Mixtape to a spotify playlist..."),
                		m("button",{onclick:function(e){location.hash = "/three"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageThree = {
	view: function(){
		return m("html",[
							m("head", [
    					 	m("link[href='./build/css/main.css'][rel=stylesheet]")
  						]),
              m("body",[
                m(".stageThree",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/two"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Keep Your sticker!"),
                		m("div","Remove the sticker with your code...."),
                		m("button",{onclick:function(e){location.hash = "/four"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageFour = {
	view: function(){
		return m("html",[
							m("head", [
    					 	m("link[href='./build/css/main.css'][rel=stylesheet]")
  						]),
              m("body",[
                m(".stageFour",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/three"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Return the tape"),
                		m("div","Drop off the mixtape as you exit...."),
                		m("button",{onclick:function(e){location.hash = "/five"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageFive= {
	view: function(){
		return m("html",[
							m("head", [
    					 	m("link[href='./build/css/main.css'][rel=stylesheet]")
  						]),
              m("body",[
                m(".stageFive",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/four"}},"Back"),
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
