//imports
import m from 'mithril';
import R from 'ramda'

import {Head, Spotify} from '../components';
import { addSongToUser } from '../socket/RestRequests';
import RFID from '../rfid';
// vars
// songs
// need to add song albums to each song
let id = '';
const flag = true;
const selectedSongs = [];


const songs = [
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'How To Dismantle An Atomic Bomb',
    name:'Vertigo',
    artist:'U2',
    year:'2004',
    length:'3:15',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:57ZXcBtCZXSg9TVV5xRdnR',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/d7391bc4350dda1f10cbb49da66664749e325fdf',
    selected: false,
  },
  {
    album:'Aftermath',
    name:'Paint It Black',
    artist:'Rolling Stones',
    year:'1966',
    length:'3:22',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:63T7DJ1AFDD6Bn8VzG6JE8',
    img:'https://i.scdn.co/image/c09585dd1713b35f8e47393d05ced6b9bcd03607',
    preview: 'https://p.scdn.co/mp3-preview/d7391bc4350dda1f10cbb49da66664749e325fdf',
    selected: false,
  },
  {
    album:'Led Zeppelin IV',
    name:'Stairway To Heaven',
    artist:'Led Zeppelin',
    year:'1971',
    length:'7:58',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:51pQ7vY7WXzxskwloaeqyj',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'The Wall',
    name:'Another Brick in the Wall, Pt. 2',
    artist:'Pink Floyd',
    year:'1979',
    length:'3:59',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:4gMgiXfqyzZLMhsksGmbQV',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/92210b01fcc6efa80008663c158baf79cf0d7b5f',
    selected: false,
  },
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'Paranoid',
    name:'Iron Man',
    artist:'Black Sabbath',
    year:'2005',
    length:'5:55',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:3IOQZRcEkplCXg6LofKqE9',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/83facf894aaa71be09e596b7e727609fc9bd4eb7',
    selected: false,
  },
  {
    album:'Metallica',
    name:'Enter Sandman',
    artist:'Metallica',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:1hKdDCpiI9mqz1jVHRKG0E',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'Number of the Beast',
    name:'Run to the Hills',
    artist:'Iron Maiden',
    year:'1982',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:44AxeBXrK9LQlGjXyT2oZQ',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/9372d716c78d22555cb3bcaacd0f7801a37ae60e',
    selected: false,
  },
  {
    album:'99 Luftballons',
    name:'99 Luftballons',
    artist:'Nena',
    year:'1984',
    length:'3:53',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:6HA97v4wEGQ5TUClRM0XLc',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/c711d77627eec81e5abbff3a8322741efd45657a',
    selected: false,
  },
  {
    album:'Thriller',
    name:'Thriller',
    artist:'Micheal Jackson',
    year:'1982',
    length:'5:58',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:2LlQb7Uoj1kKyGhlkBf9aC',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/e87c95de42eecbed85b08021e3125833ed31ae98',
    selected: false,
  },
  {
    album:'Solid Gold Hits',
    name:'Intergalactic',
    artist:'Beastie Boys',
    year:'2005',
    length:'3:30',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:7uDir35ufndq1NBOpoL3Ba',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/4028bd1a323312f14b39cbb355a703e1fe8b1e39',
    selected: false,
  },
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'zoopa zoopa pizza peroggi pasta penne',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  },
  {
    album: 'Plans',
    name: 'Soul Meets Body',
    artist: 'Death Cab for Cutie',
    year: '2005',
    length: '3:49',
    description: 'zoopa zoopa pizza peroggi pasta penne',
    uri: 'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img: 'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    preview: 'https://p.scdn.co/mp3-preview/261925f8f05e875cc0545c723a4f77b08757d014',
    selected: false,
  }

];

// views

// View 1 - Track List
export const pageOne = {
  view: () =>
    <html>
    <Head />

      <body>
      <a id = "check"
      className="button is-medium container"
      href ="/soundStation/two" config={m.route}>
            Add Songs to Playlist!
          </a>
    <div style="margin-top:100px;margin-left:150px;">
      <div class="card station-card">
          <img src={songs[0].img} />
          <h3>{songs[0].name}</h3><p>{songs[0].album}</p>
          <p>{songs[0].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(0)}>
            Add Song</a></footer>
        </div>

         <div class="card station-card">
          <img src={songs[1].img} />
          <h3>{songs[1].name}</h3><p>{songs[1].album}</p>
          <p>{songs[1].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(1)}>
            Add Song</a></footer>
        </div>

         <div class="card station-card">
          <img src={songs[2].img} />
          <h3>{songs[2].name}</h3><p>{songs[2].album}</p>
          <p>{songs[2].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(2)}>
            Add Song</a></footer>
        </div>

         <div class="card station-card">
          <img src={songs[3].img} />
          <h3>{songs[3].name}</h3><p>{songs[3].album}</p>
          <p>{songs[3].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(3)}>
            Add Song</a></footer>
        </div>

           <div class="card station-card">
          <img src={songs[4].img} />
          <h3>{songs[4].name}</h3><p>{songs[4].album}</p>
          <p>{songs[4].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(4)}>
            Add Song</a></footer>
        </div>

           <div class="card station-card">
          <img src={songs[5].img} />
          <h3>{songs[5].name}</h3><p>{songs[5].album}</p>
          <p>{songs[5].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(5)}>
            Add Song</a></footer>
        </div>

           <div class="card station-card">
          <img src={songs[6].img} />
          <h3>{songs[6].name}</h3><p>{songs[6].album}</p>
          <p>{songs[6].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(6)}>
            Add Song</a></footer>
        </div>

           <div class="card station-card">
          <img src={songs[7].img} />
          <h3>{songs[7].name}</h3><p>{songs[7].album}</p>
          <p>{songs[7].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(7)}>
            Add Song</a></footer>
        </div>

           <div class="card station-card">
          <img src={songs[8].img} />
          <h3>{songs[8].name}</h3><p>{songs[8].album}</p>
          <p>{songs[8].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(8)}>
            Add Song</a></footer>
        </div>

           <div class="card station-card">
          <img src={songs[9].img} />
          <h3>{songs[9].name}</h3><p>{songs[9].album}</p>
          <p>{songs[9].artist}<br />Rock</p>
          <footer className="card-footer song-card-button">
          <a class="card-footer-item" onclick = {() => cardSelect(9)}>
            Add Song</a></footer>
        </div>





      </div>

          </body>



    </html>,
}

export const pageTwo = {
  view: () =>
  <html>
    <Head />
    <body>
    <h2
    config={
      RFID.init((idNum) =>
        addSongToUser(idNum, R.map(R.prop('uri'), R.filter(R.propEq('selected', true), songs))))
    }>
    Scan Casette</h2>
    </body>
  </html>,

};

export const pageThree = {
  view: () =>
    <html>
    <Head />
      <body>
      <h1>Songs have been added to playlist!</h1>
      <p>Please head toward the end kiosk.</p>
      </body>


    </html>,
};

function audio(){
  var x = document.getElementById('myAudio')
  x.pause();
  x.play();
  console.log('hello from audio');

}


function cardSelect(cardnum) {
  var x = cardnum;
  songs[x].selected = !(songs[x].selected);
  console.log(songs[x].name+ ", " + songs[x].selected);
}


export default {
  pageOne,
  pageTwo,
  pageThree,
};
