import m from 'mithril';
import { isNil, curry } from 'ramda';
import Promise from 'bluebird';
/*
Almost all api requests need an authorization token
Get the token by directing the page to this link -> https://accounts.spotify.com:/authorize?client_id=b5dc615d0bcc47109e0ea1c5725f1cb8&response_type=token&
                                                       redirect_uri=http://localhost:3000/?/tablet/&scope=playlist-modify-private playlist-modify-public&show_
                                                       dialog=false
*/

const url = () => `https://accounts.spotify.com:/authorize?client_id=be7cab20471747848c74c18e4e845c08&response_type=token&redirect_uri=${window.location}&scope=playlist-modify-private playlist-modify-public&show_dialog=false`;

/* @return authcode from url */
const authCode = () => {
  let urlParams = '';
  let match = '';
  const pl = /\+/g;
  const search = /([^&=]+)=?([^&]*)/g;
  const decode = s => decodeURIComponent(s.replace(pl, ' '));
  const query = window.location.hash.substring(1);

  urlParams = {};
  match = search.exec(query);

  if (isNil(match)) return null;

  urlParams[decode(match[1])] = decode(match[2]);
  return urlParams.access_token;
};

export const fuckSpotify = () => window.location = url();

const headers = (accessToken, xhr) => {
  xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  xhr.setRequestHeader('Content-type', 'application/json');
};

// grabs the authorization token from the hash in the url
export const getAuthorization = () =>
  Promise.resolve(isNil(authCode()) ? fuckSpotify() : authCode());

export const getPlaylist = playlistId =>
  getAuthorization()
  .then(accessToken =>
    m.request({
      url: `https://api.spotify.com/v1/users/argyleturtles/playlists/${playlistId}/tracks`,
      config: curry(headers)(accessToken),
      method: 'GET',
    }));

export const makePlaylist = name =>
  getAuthorization()
  .then(accessToken => m.request({
    url: 'https://api.spotify.com/v1/users/argyleturtles/playlists',
    config: curry(headers)(accessToken),
    method: 'POST',
    data: {
      name,
      public: true,
    },
    dataType: 'json',
  }));

// playlistId example 1LMIR46zW0b982mupRtH5W
// songId example spotify:track:6FVYwnVrnAEIRnY3bHJb46
export const addSong = (songIds, playlistId) =>
  getAuthorization()
  .then(accessToken => m.request({
    url: `https://api.spotify.com/v1/users/argyleturtles/playlists/${playlistId}/tracks`,
    config: curry(headers)(accessToken),
    method: 'POST',
    data: {
      uris: songIds,
    },
    dataType: 'json',
  }));

export default {
  addSong,
  getPlaylist,
  makePlaylist,
  getAuthorization,
  url,
};