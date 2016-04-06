import m from 'mithril';

import head from '../components/head';

import * as spot from '../components/spotify';

// client entry file
export const stageOne = { 
	view: function(){
		return m("html",[
				head,
              m("body",[
                m(".stageOne",[
                	m(".banner",[
                        m("button",{onclick:function(e){document.location.href='https://accounts.spotify.com:/authorize?client_id=b5dc615d0bcc47109e0ea1c5725f1cb8&response_type=token&redirect_uri=http://localhost:3000/?/tablet/&scope=playlist-modify-private playlist-modify-public&show_dialog=false';}},"Authorize"),
                		m("div","Enter Your Code")
                	]),
                	m(".content",[
                		m("div","Enter the code from the sticker....newly-created playlist!"),
                		m("input",{type:"text"}),
                		m("br"),
                		m("input",{type:"text"},"My Mixtape"),
                		m("br"),
                    m("button",{onclick:function(e){ const playlist = spot.spotify.makePlaylist("New");}},"Get Music"),
                		m("button",{onclick:function(e){location.search = "/tablet/mix"}},"Rock On!")
                	]),
                ]),
              ]),
            ]);
	}
};

export const myMix = {
    view: function(){
        return m("html",[
          head,
                  m("body",[
                    m(".myMix",[
                      m(".graph","Graph goes here"),
                       m("button",{onclick:function(e){ const playlist = spot.spotify.getPlaylist();}},"Get Music"),
                       m("button",{onclick:function(e){location.search = "/tablet/two"}},"Rock On!"),
                      m(".songList","Song list")
                      ]),
                    ]),
                ]);
    }

};

export const stageTwo = {
	view: function(){
		return m("html",[
							m('head', [
								m(`link[href='./build/css/main.css'][rel=stylesheet]`),
							]),
              m("body",[
                m(".stageTwo",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/tablet/"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Congrats!"),
                		m("div","We have saved your Mixtape to a spotify playlist..."),
                		m("button",{onclick:function(e){location.search = "/tablet/three"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageThree = {
	view: function(){
		return m("html",[
							m('head', [
								m(`link[href='./build/css/main.css'][rel=stylesheet]`),
							]),
              m("body",[
                m(".stageThree",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/tablet/two"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Keep Your sticker!"),
                		m("div","Remove the sticker with your code...."),
                		m("button",{onclick:function(e){location.search = "/tablet/four"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageFour = {
	view: function(){
		return m("html",[
							m('head', [
								m(`link[href='./build/css/main.css'][rel=stylesheet]`),
							]),
              m("body",[
                m(".stageFour",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.hash = "/tablet/three"}},"Back"),
                		m("div","My Mixtape")
                	]),
                	m(".content",[
                		m("div","Return the tape"),
                		m("div","Drop off the mixtape as you exit...."),
                		m("button",{onclick:function(e){location.search = "/tablet/five"}},"Next")
                	]),
                ]),
              ]),
            ]);
	}
};

export const stageFive= {
	view: function(){
		return m("html",[
							m('head', [
								m(`link[href='./build/css/main.css'][rel=stylesheet]`),
							]),
              m("body",[
                m(".stageFive",[
                	m(".banner",[
                		m("button[class=back]",{onclick:function(e){location.search = "/tablet/four"}},"Back"),
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
