import m from 'mithril';

const config = xhr => xhr.setRequestHeader('Content-type', 'application/json');
const serialize = data => JSON.stringify(data);

export const getUserSongsByUsercode = usercode =>
  m.request({
    method: 'GET',
    url: `http://localhost:3000/user/songs/usercode/${usercode}`,
  });

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

export const removeSong = (usercode, songs) => {
  console.log(songs);
  return m.request({
    config,
    serialize,
    method: 'POST',
    url: 'http://localhost:3000/user/remove',
    data: {
      usercode,
      songs,
    },
    dataType: 'json',
  });};

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

export const addSongToUser = (rfid, songs) =>
  m.request({
    config,
    serialize,
    method: 'POST',
    url: 'http://localhost:3000/user/add',
    data: {
      rfid,
      songs,
    },
    dataType: 'json',
  });
