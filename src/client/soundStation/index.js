//imports
import m from 'mithril';
import R from 'ramda'

import {Head, Spotify, SongPreview} from '../components';
import SongCard from './components/songCard2';
import { addSongToUser } from '../socket/RestRequests';
import RFID from '../rfid';
// vars
// songs
// need to add song albums to each song
let id = '';
const flag = true;


const songs = [

  {
    album:'Plans',
    name:'Soul Meets Body',
    artist:'Death Cab for Cutie',
    year:'2005',
    length:'3:49',
    description:'Soul Meets Body has "tender, lovelorn lyrics that anyone over the age of ten can relate to coupled with the kind of shimmering indie-pop that a thousand imitators have failed to fully master.',
    uri:'spotify:track:5yc59J3MR3tVDPTOgwgRI5',
    img:'https://i.scdn.co/image/3e5e3d76c8f50393a6494a1c8bea1a01178a8753',
    songID: '5yc59J3MR3tVDPTOgwgRI5',
    selected: false,
    genre:'Alternative'
  },
  {
    album:'How To Dismantle An Atomic Bomb',
    name:'Vertigo',
    artist:'U2',
    year:'2004',
    length:'3:15',
    description:'"Vertigo" is the opening track and first single from their 2004 album, How to Dismantle an Atomic Bomb. The single was released for airplay on 24 September 2004.',
    uri:'spotify:track:57ZXcBtCZXSg9TVV5xRdnR',
    songID:'57ZXcBtCZXSg9TVV5xRdnR',
    img:'https://i.scdn.co/image/1ba80e91c966d08ba4340b4e9f21c55b064a1e21',
     selected: false,
    genre:'Rock'
  },
  {
    album:'Aftermath',
    name:'Paint It Black',
    artist:'Rolling Stones',
    year:'1966',
    length:'3:22',
    description:"Musically inspired by the sitar playing of George Harrison and Harihar Rao, 'Paint It Black', along with the Jagger and Richards-penned 'Mother's Little Helper', was influential in developing the musical styles of psychedelic rock and raga rock.",
    uri:'spotify:track:63T7DJ1AFDD6Bn8VzG6JE8',
    songID:'63T7DJ1AFDD6Bn8VzG6JE8',
    img:'https://i.scdn.co/image/c09585dd1713b35f8e47393d05ced6b9bcd03607',
     selected: false,
    genre: 'Rock'
  },
  {
    album:'Led Zeppelin IV',
    name:'Stairway To Heaven',
    artist:'Led Zeppelin',
    year:'1971',
    length:'7:58',
    description:"Stairway to Heaven was composed by guitarist Jimmy Page and vocalist Robert Plantfor the band's untitled fourth studio album (often called Led Zeppelin IV). It is often referred to as one of the greatest rock songs of all time.",
    uri: 'spotify:track:51pQ7vY7WXzxskwloaeqyj',
    songID:'51pQ7vY7WXzxskwloaeqyj',
    img:'https://i.scdn.co/image/c89be3d95870abb652c16deef6e3d3e5174710ff',
     selected: false,
    genre: 'Rock',
  },
  {
    album:'The Wall',
    name:'Another Brick in the Wall, Pt. 2',
    artist:'Pink Floyd',
    year:'1979',
    length:'3:59',
    description:"'Another Brick in the Wall' is the title of three songs set to variations of the same basic theme, on Pink Floyd's 1979 rock opera, The Wall.All parts were written by Pink Floyd's bassist, Roger Waters. Part II is a protest song against rigid schooling in general and boarding schools in the UK in particular.",
    uri:'spotify:track:4gMgiXfqyzZLMhsksGmbQV',
    songID:'4gMgiXfqyzZLMhsksGmbQV',
    img:'https://i.scdn.co/image/464f49ec36104a5939ea76cf1597a5311d91f602',
     selected: false,
    genre: 'Rock'
  },
  {
    album:'Paranoid',
    name:'Iron Man',
    artist:'Black Sabbath',
    year:'2005',
    length:'5:55',
    description:'Upon hearing the main guitar riff for the first time, vocalist Ozzy Osbourne remarked that it sounded "like a big iron bloke walking about". The title became "Iron Man", with Geezer Butler writing the lyrics around the title.',
    uri:'spotify:track:3IOQZRcEkplCXg6LofKqE9',
    songID:'3IOQZRcEkplCXg6LofKqE9',
    img:'https://i.scdn.co/image/851538088475961344e79ae1022d1a0bd0bf53f5',
     selected: false,
    genre: 'Metal'
  },
  {
    album:'Metallica',
    name:'Enter Sandman',
    artist:'Metallica',
    year:'2005',
    length:'3:49',
    description:"The song by American heavy metal band Metallica. It was released as the first single from their eponymous fifth album, Metallica in 1991. The lyrics deal with the concept of a child's nightmares.",
    uri:'spotify:track:1hKdDCpiI9mqz1jVHRKG0E',
    songID: '1hKdDCpiI9mqz1jVHRKG0E',
    img:'https://i.scdn.co/image/400dee6165a81c49b665d18637e3954213679ee8 ',
     selected: false,
    genre: 'Metal'
  },
  {
    album:'Number of the Beast',
    name:'Run to the Hills',
    artist:'Iron Maiden',
    year:'1982',
    length:'3:49',
    description:'"Run to the Hills" is a song by the English heavy metal band Iron Maiden. It was released as their sixth single and the first from their third studio album, The Number of the Beast (1982). Credited solely to the bassist, Steve Harris, although significant contributions were made by lead vocalist Bruce Dickinson.',
    uri:'spotify:track:44AxeBXrK9LQlGjXyT2oZQ',
    songID: '44AxeBXrK9LQlGjXyT2oZQ',
    img:'https://i.scdn.co/image/84747e43820bec289c0d75a3ae2af776f1897900',
     selected: false,
    genre: 'Metal'
  },
  {
    album:'99 Luftballons',
    name:'99 Luftballons',
    artist:'Nena',
    year:'1984',
    length:'3:53',
    description:'"99 Luftballons" (German: Neunundneunzig Luftballons, "99 balloons") is an anti-war protest song by the German band Nena from their 1983 self-titled album.',
    uri:'spotify:track:6HA97v4wEGQ5TUClRM0XLc',
    songID:'6HA97v4wEGQ5TUClRM0XLc',
    img:'https://i.scdn.co/image/7db0e29a743c07c28aba88babc47a460c70fcea5',
   selected: false,
    genre: 'Pop'
  },
  {
    album:'Thriller',
    name:'Thriller',
    artist:'Micheal Jackson',
    year:'1982',
    length:'5:58',
    description:'A 14-minute music video showing Jackson in a Halloween-themed performance was first shown on December 2, 1983. The song was not released as a single until January 23, 1984.',
    uri:'spotify:track:2LlQb7Uoj1kKyGhlkBf9aC',
    songID:'2LlQb7Uoj1kKyGhlkBf9aC',
    img:'https://i.scdn.co/image/6d1d714f4dcb306d3b3533fea400362974060d2d',
     selected: false,
    genre: 'Pop'
  },
  {
    album:'Solid Gold Hits',
    name:'Intergalactic',
    artist:'Beastie Boys',
    year:'2005',
    length:'3:30',
    description:'"Intergalactic" is a song by American hip-hop group the Beastie Boys, released as the first single from their fifth studio album Hello Nasty.',
    uri:'spotify:track:7uDir35ufndq1NBOpoL3Ba',
    songID:'7uDir35ufndq1NBOpoL3Ba',
    img:'https://i.scdn.co/image/c7c2d21c4152741210c2eede503a3dceab35b05c',
    selected: false,
    genre: 'Hip-Hop'
  },
    {
    album:'Raising Hell',
    name:"It's Tricky",
    artist:'Run D.M.C',
    year:'2005',
    length:'3:30',
    description:"It's Tricky is the final single released from Run–D.M.C.'s third album, Raising Hell. It was released late in 1986 through Profile Records and was co-produced by Rick Rubin and the group themselves. The song peaked at No. 57 on the BillboardHot 100 and No. 21 on the Hot R&B/Hip-Hop Songs.",
    uri:'spotify:track:1zAfj2rXxddGb8Dhnwxue8',
    songID:'1zAfj2rXxddGb8Dhnwxue8',
    img:'https://i.scdn.co/image/e1a16b17492b091182a76b3cdb32b69232cdea09',
     selected: false,
    genre: 'Hip-Hop'
  },
  {
    album:'Nevermind',
    name:"Come As Your Are",
    artist:'Nirvana',
    year:'1991',
    length:'3:39',
    description:'Kurt Cobain, frontman of Nirvana, writes this song about “people and what they are expected to act like”. Cobain’s raspy vocals, coupled with a low and steady guitar riff, typify the ‘grunge’ style so commonly associated with Nirvana.',
    uri:'spotify:track:4P5KoWXOxwuobLmHXLMobV',
    songID:'4P5KoWXOxwuobLmHXLMobV',
    img:'https://i.scdn.co/image/864bd75b46a575917d795b7a484f7f1fe43d23e9 ',
     selected: false,
    genre: 'Alternative'
  },
  {
    album:'King of Electric Blues',
    name:"Mannish Boy",
    artist:'Muddy Waters',
    year:'1997',
    length:'5:21',
    description:'Between a heavy drumline, strong elements of electric guitar, and risque lyrics,  "Mannish Boy" exemplifies the fun and carefree ‘bad boy’ style of blues! The shouting and singing along of listeners in the background allude to the tight African American community from which blues arose. ',
    uri:'spotify:track:58PSYdY0GFg0LFb2PxYk4T',
    songID:'58PSYdY0GFg0LFb2PxYk4T',
    img:'https://i.scdn.co/image/058c42d38cc9f1b86a9bffb3b512cc986f6952a1',
     selected: false,
    genre: 'Blues'
  },
   {
    album:'The Graduate',
    name:"The Sound of Silence",
    artist:'Simon & Garfunkel',
    year:'1968',
    length:'3:05',
    description:'“The Sound of Silence” features a gentle vocal harmony between Paul Simon and Art Garfunkel. The elegant rhymes, sung against melancholy minor tones, yields a folksy solitudinal feel that is truly majestic.',
    uri:'spotify:track:2LkaNhCrNVmcYgXJeLVmsw',
    songID:'2LkaNhCrNVmcYgXJeLVmsw',
    img:'https://i.scdn.co/image/753d9208d21d332eea5673102a15266c2f08a884',
    selected: false,
    genre: 'Folk'
  },
   {
    album:'The Best of Don McLean',
    name:"American Pie",
    artist:'Don McLean',
    year:'1989',
    length:'8:36',
    description:'“American Pie” has become an icon of not just folk music, but Rock and Roll in general. The song, written and sung by McClean, laments the premature death of rock legend Buddy Holly. ',
    uri:'spotify:track:2QgWuCtBpNIpl5trmKCxRf',
    songID:'2QgWuCtBpNIpl5trmKCxRf',
    img:'https://i.scdn.co/image/5abe5e81fb9858849116e1678d6e595c4ca68c34',
     selected: false,
    genre: 'Folk'
  },
   {
    album:"The Times They Are A'Changing",
    name:"The Times They Are A'Changing",
    artist:'Bob Dylan',
    year:'1964',
    length:'3:12',
    description:"Folk legend Bob Dylan writes ‘The Times They Are - ’Changin’ as a deliberate attempt to create an anthem of change for the time, influenced by Irish and Scottish ballads. The tune classically features Dylan on his harmonica, backed by a simple acoustic guitar.",
    uri:'spotify:track:52vA3CYKZqZVdQnzRrdZt6',
    songID:'52vA3CYKZqZVdQnzRrdZt6',
    img:'https://i.scdn.co/image/0934c1a0019dd7783d514249680180b39c94100d',
     selected: false,
    genre: 'Folk'
  },
  {
    album:"The Man Who Invented Soul",
    name:"Wonderful World",
    artist:'Sam Cooke',
    year:'2000',
    length:'2:06',
    description:'In “Wonderful World” singer-songwriter Sam Cooke addresses an unrequited lover, claiming that, although he knows little about his school subjects, he knows that he belongs with her! Cooke’s charming lead vocals, backed by a small quartet, create an old-fashioned melody full of sweetness and nostalgia.',
    uri:'spotify:track:5SKXlfKfhNUyJ3GkpI0ELJ',
    songID:'5SKXlfKfhNUyJ3GkpI0ELJ',
    img:'https://i.scdn.co/image/0400f51d1c2ff1ace99d28c12d8258e73d330b18',
     selected: false,
    genre: 'R&B/Soul'
  },
  {
    album:"Love Songs",
    name:"At Last",
    artist:'Etta James',
    year:'2006',
    length:'3:00',
    description:'“At Last” is a cover of a 1941 hit composed and recorded for the film “Orchestra Wives”. The revamped version by Etta James features a bold leading vocals, reminiscent of Gospel music, over a symphony of strings. Combined with with romantic lyrics, the song exudes deep liveliness and passion',
    uri:'spotify:track:1nd9moIZkGvWoHtReFqkRY',
    songID:'1nd9moIZkGvWoHtReFqkRY',
    img:'https://i.scdn.co/image/afe423c99a46d1ed470f3d41bc5850e1288ca771',
     selected: false,
    genre: 'R&B/Soul'
  },
  {
    album:"Ray Charles",
    name:"I've Got A Woman",
    artist:'Ray Charles',
    year:'2003',
    length:'2:51',
    description:'Built along a gospel-frenetic pace with secular lyrics and a jazz-inspired rhythm and blues background. The song would be one of the prototypes for what later became termed as "soul music".',
    uri:'spotify:track:2xar08Fq5xra2KKZs5Bw9j',
    songID:'2xar08Fq5xra2KKZs5Bw9j',
    img:'https://i.scdn.co/image/2ad60ab4f04de877f48ca7ae8e62618d38f0e51e',
     selected: false,
    genre:'R&B/Soul'
  },

];

const addSongToPlaylist = (id) =>
 cardSelect(id);


const pickACard = id => () => {
    Spotify.getSongPreview(songs[id].uri.split(':')[2])
    .then(track => SongPreview.setAudioSource(track));

};


// views
const createCard = (data, id) =>
  <div id={`card-${id}`} className="song-card2" onclick={pickACard(id)}>
    <SongCard
      song={data}
      cardId={id}
      addSong={addSongToPlaylist}
      removeSong={addSongToPlaylist}
      preview={SongPreview}
  />
  </div>;


// View 1 - Track List
export const pageOne = {
  view: () =>
    <html style = "background-color:#222;">
    <Head />
      <body>
      <h1 style="float:left; font-size:100px;margin-left:200px; margin-top:-50px; color:white;font-family:edoregular">Mixta Soundstation</h1>
      <a
      href ="/soundStation/two" config={m.route} style="font-size:50px;margin-right:200px;margin-top:-10px;float:right;color:white;letter-spacing:px">
           CONTINUE <img src="../../assets/img/skip_arrow.svg" style="width:100px" />
          </a>
      <div style="margin-top:100px;margin-right:100px;margin-left:100px; background-color:black;">
        <SongPreview />
      <div className="card-holder" style = "float:right">
        {
          songs.map(
          (card, i) => createCard(card, i))
        }
      </div>

      </div>

          </body>



    </html>,
}

export const pageTwo = {
  view: () =>
  <html style = "background-color:#222">
    <Head />
    <body>
    <h2
    className="pg1-title"
    config={
      RFID.init((idNum) =>
        addSongToUser(idNum, R.map(R.prop('uri'), R.filter(R.propEq('selected', true), songs)))
        .then(() => window.setTimeout(() => window.location = "http://129.21.72.239:3000/app/?/soundStation/"), 2000)
      )
    }>
    Scan Casette</h2>
    <img src="../../assets/img/tape.png" />

        </body>
  </html>,

};

export const pageThree = {
  view: () =>
    <html style = "background-color:#222">
    <Head />
      <body>
      <h1 id = "titl" className = "pg1-title">Rock On!</h1>
        <a onclick={moveOver2} style="font-size:30px;color:white;letter-spacing:2px">
           Finish <img src="../../assets/img/skip_arrow.svg" style="width:50px" /></a>
      </body>


    </html>,
};

function moveOver(){
  console.log('hello from move over');
  location.search="/soundStation/three";
}

function moveOver2(){
  location.search="/soundStation/";
}

function check(){
  console.log(songs[0].name);
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
