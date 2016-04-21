//imports
import m from 'mithril';
import {Head, Spotify} from '../components';

//vars


//songs
//need to add song albums to each song
const songs = [  {
    track:'Soul Meets Body', artist:'Death Cab For Cutie',album:'Plans', year:'2005',length:'3:49',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    uri:'spotify:track:1NFGnxmeIEBakre4DvLaJq',
	selected:false
  },
  {
    track:'Take Me Somewhere Nice', artist:'Mogwai',album:'Rock Action', year:'2001',length:'6:57',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/5b4dc9e50bd1ec24da0ad9cb0dc52201a10a6b0c',
    uri:'spotify:track:1cZET7z7pjEaaC9Eq6kxQr',
	selected:false
  },
  {
    track:'Come As You Are', artist:'Nirvana',album:'Nevermind', year:'1991',length:'3:39',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:4P5KoWXOxwuobLmHXLMobV',
    selected:false
  },
  {
    track:'Vertigo', artist:'U2',album:'How to Dismantle An Atomic Bomb', year:'2004',length:'3:14',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:57ZXcBtCZXSg9TVV5xRdnR',
    selected:false
  },
  {
    track:'99 Luftballons', artist:'Nena',album:'99 Luftballons', year:'1984',length:'3:53',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:6HA97v4wEGQ5TUClRM0XLc',
    selected:false
  },
  {
    track:'Iron Man', artist:'Black Sabbath',album:'Paranoid', year:'1970',length:'5:55',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:3IOQZRcEkplCXg6LofKqE9',
	selected:false
  },
  {
    track:'Paint It, Black', artist:'The Rolling Stones',album:'Aftermath', year:'1966',length:'3:44',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:7lY8aoN3wUR3NY4nUwigPv',
	selected:false
  },
  {
    track:'The Number of the Beast', artist:'Iron Maiden',album:'The Number of the Beast', year:'1982',length:'4:51',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:47FmjOhMMPiCsqLD6nbIgZ',
	selected:false
  },
  {
    track:'Search and Destroy', artist:'The Stooges',album:'My Girl Hates My Heroin', year:'2007',length:'4:13',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:6Od3VagypWdUBrDnLMx8d0',
	selected:false
  },
  {
    track:'Thunder Road', artist:'Bruce Springsteen',album:'Born To Run', year:'1978',length:'4:48',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:6hTcuIQa0sxrrByu9wTD7s',
	selected:false
  },
  {
    track:'Can You Feel the Love Tonight', artist:'Elton John',album:'Lion King Original Sound Track', year:'1994',length:'4:01',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:0EANX0OVKSCcmarY50Xa4p',
	selected:false
  },
  {
    track:'For the Longest Time', artist:'Billy Joel',album:'An Innocent Man', year:'1983',length:'3:36',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:3YhcVZIWyakQSTUJD1YMt4',
	selected:false
  },
  {
    track:'Fat Bottomed Girl', artist:'Queen',album:'Jazz', year:'1978',length:'4:15',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:4igIYHF3B5VBxEafHauVo3',
	selected:false
  },
  {
    track:'Juke Box Hero', artist:'Foreigner',album:'4', year:'1981',length:'4:19',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:00qOE7OjRl0BpYiCiweZB2',
	selected:false
  },
  {
    track:'Run Like Hell', artist:'Pink Floyd',album:'The Wall', year:'1979',length:'4:23',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:0EaLRxrtnq7Mqhdf8q9txr',
	selected:false
  },
  {
    track:'Babe Im Gonna Leave You', artist:'Led Zeppelin',album:'Led Zeppelin', year:'1969',length:'6:41',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:4OMu5a8sFpcRCPCcsoEaov',
	selected:false
  },
  {
    track:'Magic Carpet Ride', artist:'Steppenwolf',album:'The Second', year:'1968',length:'4:28',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:5HRL78OfxCYsDQtRYsBF4T',
	selected:false
  },
  {
    track:'The Impression That I Get', artist:'Mighty Mighty Bosstones',album:'Lets Face It', year:'1997',length:'3:15',
    info:'\('-')/ i have no clue what were gonna put here for all those tracks',
    art:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',uri:'spotify:track:1ru5R5iSawvuMELqKXxLjS',
	selected:false
  }
]
//****views****

//View 1 - Track List
export const pageOne = {
  view: () =>
    <html>
	  <Head />
      <body>
      <div style='margin-top:100px;margin-left:100px;'>
	     
       <div class="card" id='0'>
        <img src='https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753' />
        <p>{songs[0].track}<br />{songs[0].artist}</p>
        <button
          onclick={hello}
        >Add me</button>
        </div>
	    </div> 


		
      </body>
	  
    </html>,
}

function hello(){
  songs[0].selected = !(songs[0].selected);
    console.log('The song is selected: ' + songs[0].selected );

}

/*




/*
//View 2 - Scan Cassette
export const pageTwo = {
  view: function(){
    return m("html",[
      head,
      m('body',[
        m('div',{onkeydown:function(e){
		//onkeydown it will make rfid reader go
		
		//get full ID from keypress until length =
		
		//check for user ID
		var playID;

		//get selected songs
		for (var z = 0; z< songs.length; z++){
		  if (songs[z].selected){
			selected.push(songs[z].uri)
		  }		
		}
		//send spotify 
		for (var x = 0; x < selectedSongs.length; x++){
		  spotify.addSong(selectedSongs[x].uri,playID);}
		
		//head to next page
		location.search = "/soundStation/pageThree";
		}} ),[
          m('h1',"Scan your Mixtape!"),
          m('p',"Place your tape in the outlined area."),
		  
        ]),
      ]),
    ]),
  }	
};


//View 3 - Success/Fail
export const pageThree = {
  view: function(){
	return m("html",[
      head,
      m('body',[
        m('div',[
          m('h1',"Your songs have been added!"),
		  m('p',"Please go to the end kiosk!"),
		  m('button',{onclick:function(e){location.search = "/soundStation/pageOne"}}, "<-- Return to Song Selection")
        ]),
      ]),
    ]),  
  }	
};
*/

export default {
	pageOne,
	
}
