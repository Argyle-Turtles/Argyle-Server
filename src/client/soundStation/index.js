//imports
import m from 'mithril';
import head from '../components/head';
import {Spotify} from '../components';

//songs
//image size varies, aim for ~300
const songs = [
//  
  {
    track:'Soul Meets Body', artist:'Death Cab For Cutie',
    album:'Plans', year:'2005',
    length:'3:49',
    info:'¯\_('-')_/¯ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    uri:'spotify:track:1NFGnxmeIEBakre4DvLaJq'
  }
  
]

//****views****
//View 1 - Track List
const pageOne = {
  view: function(){
	return m("html",[
      head,
      m('body',[
        m('div'),[
          m('h1',songs[0].track),
          m('p',songs[0].artist + ", Album: "+ songs[0].album+ ", Year:"+ songs[0].year + ", Length:"+songs[0].length),
          m("image[href='songs[0].art]"),
        ]),
      ]),
    ]),  
  }	
};


//View 2 - Scan Cassette
const pageTwo = {
  view: function(){
    return m("html",[
      head,
      m('body',[
        m('div'),[
          m('h1',"Scan your Mixtape!"),
          m('p',"Place your tape in the outlined area."),
        ]),
      ]),
    ]),
  }	
};


//View 3 - Success/Fail
