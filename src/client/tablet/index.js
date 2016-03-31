import m from 'mithril';

import { head } from '../components';
// client entry file
const accessToken = "BQCTArAfX5YwDrC3Ti36xci8XMKQ-HBDY7jOEJbiNw4qRSuFoMLNdDNPuQS8oZj7gj36Zs75fmcDpU7tfgCHfKZm3Z9ZilxD9q6pFoBNMPkyUil5JDftGZMbETGhS2_yzLNZkTJJwlhOB6qWpNJxqj70M5RZHYh8lq2jS06k6YKlU1efR3LF6z5mGEAqhzh7ClKolEwqrYwbPJffI1bG1Bbcm58YBZmB6rw79Fbg0Ku8NCR-UbCE0A"
const spotify = {
    getPlaylist: function(){
        return m.request({method:"GET", url:"https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}",headers:{
                         'Authorization': 'Bearer ' + accessToken,
                         'Content-type': 'application/json'}});
    }
}

export const stageOne = { 
	view: function(){
		return m("html",[
				head,
              m("body",[
                m(".stageOne",[
                	m(".banner",[
                        m("button",{onclick:function(e){document.location.href='https://accounts.spotify.com:/authorize?client_id=f81d5574fd5b4b57b517ba20081f3235&response_type=token&redirect_uri=http://localhost:3000/#tablet/&scope=playlist-modify-private playlist-modify-public&show_dialog=false';}},"Authorize"),
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

export const myMix = {
    view: function(){
        return m("html",[
          head,
                  m("body",[
                    m(".myMix",[
                      m(".graph","Graph goes here"),
                      m(".songList","Song list")
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
