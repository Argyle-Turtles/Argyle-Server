//imports
import m from 'mithril';
import {Head, Spotify} from '../components';
import {init as rfid2} from '../rfid';

//vars
//songs
//need to add song albums to each song
var id ="";
var flag = true;

const songs = [
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5v0Q1mWIWd5XYtto97VUZy',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    selected: false,
  }

];

//views

//View 1 - Track List
export const pageOne = {
  view: () =>
    <html>
    <Head />
      <body>
    <div style='margin-top:100px;margin-left:90px;'>
      <div class="card">
          <img src={songs[0].img} />
          <h3>{songs[0].name}</h3><p>{songs[0].artist}</p>
          <footer className="card-footer song-card-button"><a class="card-footer-item" onclick = {() => cardSelect(0)}>
            Add Song</a></footer>
        </div>         
    </div>     
    <a className="button is-medium container" onclick = "test" href ="/soundStation/two" config={m.route}>
            Add Songs to Playlist!
          </a>
            <button onclick={spotifyEverything}>Get Authorized </button>
            <button onclick={addSong}>Add Songs</button>
      
          </body>
    
    </html>,
}

export const pageTwo = {
  view: () =>
  <html>
    <Head />
   
    <body>
    <h2>Scan Casette</h2>
    <button onclick={spotifyEverything}>Check songs </button>
   
    </body>

  </html>,

}

export const pageThree = {
  view: () =>
    <html>
    <Head />
      <body>
      <h1>Songs have been added to playlist!</h1>
      <p>Please head toward the end kiosk.</p>
      </body>

    
    </html>,
}

function addSong(){
  Spotify.addSong(songs[0].uri, '293wuSMQarlUG8rzM5RpAe');
}




function cardSelect(cardnum){
  var x = cardnum;
  songs[x].selected = !(songs[x].selected);
  console.log(songs[x].name+ ", " + songs[x].selected);
}
//spotify:user:argyleturtles:playlist:293wuSMQarlUG8rzM5RpAe

function spotifyEverything(){
  
  document.location.href='https://accounts.spotify.com:/authorize?client_id=be7cab20471747848c74c18e4e845c08&response_type=token&redirect_uri=http://localhost:3000/?/soundStation/&scope=playlist-modify-private playlist-modify-public&show_dialog=false';
                    
  }

const addSongsToServer = id =>
  m.request({
    method: 'POST',
    url: '/user/add',
    data: {
      rfid: id,
      songs: vm.songs(),
    },
    serialize: data => JSON.stringify(data),
    config: xhr => {
      xhr.setRequestHeader('Content-Type', 'application/json');
    },
  });

const addSongsToSpotify = id =>
  m.request({
    method: 'GET',
    url: '/user/playlist/rfid/' + id,
  })
  .then(res => console.log(res));


window.onkeydown = function (event){   
    if (flag ==true && id.length <10){
      id += String.fromCharCode(event.keyCode);
        if (id.length == 10){
          console.log(id);

        }
     }
  }  


export default {
  pageOne,
  pageTwo,
  pageThree,

}
