import m from 'mithril';
/*
Almost all api requests need an authorization token
Get the token by directing the page to this link -> https://accounts.spotify.com:/authorize?client_id=b5dc615d0bcc47109e0ea1c5725f1cb8&response_type=token&
                                                       redirect_uri=http://localhost:3000/?/tablet/&scope=playlist-modify-private playlist-modify-public&show_
                                                       dialog=false
*/

const url = () => `https://accounts.spotify.com:/authorize?client_id=be7cab20471747848c74c18e4e845c08&response_type=token&redirect_uri=${window.location}&scope=playlist-modify-private playlist-modify-public&show_dialog=false`;

const isAuthTokenExpired = () => {

};

const authCode = () => {
  let urlParams = "";
  let match = "",
  pl     = /\+/g,
  search = /([^&=]+)=?([^&]*)/g,
  decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
  query  = window.location.hash.substring(1);

  urlParams = {};
  match = search.exec(query);
  urlParams[decode(match[1])] = decode(match[2]);

  return urlParams["access_token"];
};

// grabs the authorization token from the hash in the url
export const getAuthorization = () => {
  if (authTokenExpired()) window.location = url();


};

export const getPlaylist = () => {
   const accessToken = getAuthorization();
   const headerData = function(xhr) {
    xhr.setRequestHeader("Authorization","Bearer "+ accessToken);
    xhr.setRequestHeader("Content-type","application/json");
  };
  m.request({url:"https://api.spotify.com/v1/users/argyleturtles/playlists/1LMIR46zW0b982mupRtH5W/tracks",
      config: headerData,
      method: "GET"
  }).then(function(resp){
    console.log(resp);
  });
};

export const makePlaylist = (name) => {
  const accessToken = getAuthorization();
  const data = {
      "name":name,
      "public":true
    };
  const headerData = function(xhr) {
    xhr.setRequestHeader("Authorization","Bearer "+ accessToken);
    xhr.setRequestHeader("Content-type","application/json");
  };
  console.log(accessToken);
  m.request({url:"https://api.spotify.com/v1/users/argyleturtles/playlists",
    config: headerData,
    method:"POST",
    data:data,
    dataType:'json',
  }).then(function(resp){
    console.log(resp['id']);
  });
};

//playlistId example 1LMIR46zW0b982mupRtH5W
//songId example spotify:track:6FVYwnVrnAEIRnY3bHJb46
export const addSong = (songIds, playlistId) => {
  const accessToken = getAuthorization();
  const data = {
    "uris": songIds,
  };
  const headerData = function(xhr){
    xhr.setRequestHeader("Authorization","Bearer "+ accessToken);
    xhr.setRequestHeader("Content-type","application/json");
  };
  m.request({url:"https://api.spotify.com/v1/users/argyleturtles/playlists/4gpNqwfLb24V5GGCXbtOcU/tracks",
    config: headerData,
    method: "POST",
    data: data,
    dataType:'json'
  })
  .then(function(resp){
    console.log("song added")
  })
  .catch((e) => console.log(e));

};

export default {
  addSong,
  getPlaylist,
  makePlaylist,
  getAuthorization,
  url,
};
