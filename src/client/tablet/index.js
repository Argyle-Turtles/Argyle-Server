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
                    m("button",{onclick:function(e){ const playlist = spot.makePlaylist("New");}},"Get Music"),
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
                       m("button",{onclick:function(e){ const playlist = spot.getPlaylist();}},"Get Music"),
                       m("button",{onclick:function(e){location.search = "/tablet/two"}},"Rock On!"),
                      m(".songList","Song list")
                      ]),
                    ]),
                ]);
    }





export default {
  //code
};

