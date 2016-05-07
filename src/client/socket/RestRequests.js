import m from 'mithril';

const config = xhr => xhr.setRequestHeader('Content-type', 'application/json');
const serialize = data => JSON.stringify(data);

export const getUserSongsByUsercode = usercode =>
  m.request({
    method: 'GET',
    url: `/user/songs/usercode/${usercode}`,
  });

export const setPlaylist = (user, uri) =>
  m.request({
    config,
    serialize,
    method: 'POST',
    url: '/user/playlist',
    data: {
      usercode: user,
      playlistURI: uri,
    },
    dataType: 'json',
  });

export const removeSong = (usercode, songs) =>
  m.request({
    config,
    serialize,
    method: 'POST',
    url: '/user/remove',
    data: {
      usercode,
      songs,
    },
    dataType: 'json',
  });

export const createUser = (usercode, rfid) =>
  m.request({
    config,
    serialize,
    method: 'POST',
    url: '/user/create',
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
    url: '/user/add',
    data: {
      rfid,
      songs,
    },
    dataType: 'json',
  });
