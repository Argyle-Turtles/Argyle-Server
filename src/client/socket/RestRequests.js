import m from 'mithril';

const config = xhr => xhr.setRequestHeader('Content-type', 'application/json');
const serialize = data => JSON.stringify(data);

export const setPlaylist = (user, uri) =>
  m.request({
    config,
    serialize,
    method: 'POST',
    url: 'http://localhost:3000/user/playlist',
    data: {
      usercode: user,
      playlistURI: uri,
    },
    dataType: 'json',
  });

export const removeSong = (user, uris) =>
  m.request({
    config,
    serialize,
    method: 'POST',
    url: 'http://localhost:3000/user/remove',
    data: {
      usercode: user,
      songs: uris,
    },
    dataType: 'json',
  });

export const createUser = (usercode, rfid) =>
  m.request({
    config,
    serialize,
    method: 'POST',
    url: 'http://localhost:3000/user/create',
    data: {
      usercode,
      rfid,
    },
    dataType: 'json',
  });
