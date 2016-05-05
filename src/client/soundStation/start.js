//imports
import m from 'mithril';
import {Head, Spotify} from '../components';

//vars

//songs
//need to add song albums to each song
const songs = [
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:1NFGnxmeIEBakre4DvLaJq',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    selected: false,
  }

];

//****views****
const selectedSongs =[];
console.log('hello');

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
 


     
    <a className="button is-medium container" onclick = "selectedSongTwo" href ="/soundStation/two" config={m.route}>
            Add Songs to Playlist!
          </a><br />
      
          </body>
    
    </html>,
}

export const pageTwo = {
  view: () =>
  <html>
    <Head />
   
    <body>
    <h2>Scan Casette</h2>
    <button onclick={check}>Check songs </button>
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
      <button onclick={check}>Check songs </button>
      </body>

    
    </html>,
}


function check(){
  for (var z = 0; z < songs.length; z++){
  console.log(songs[z].selected)

  }
}


function cardSelect(cardnum){
  var x = cardnum;
  songs[x].selected = !(songs[x].selected);
  console.log(songs[x].track + ", " + songs[x].selected);
}

function rfid(){
      
  if(document.getElementById("rfid").value.length == 10) {
      var idnum = document.getElementById("rfid").value;
     
      console.log("RFID IS WORKING");
      console.log("ID # = " + idnum);
      document.getElementById("rfid").value = "";
      document.getElementById("rfid").focus();

    }
  }


const controller = () => {
  Spotify.getAuthorization();
}


export default {
	pageOne,
  pageTwo,
  pageThree,
  controller,

}
