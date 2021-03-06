let io;

const init = newIO => {
  io = newIO;
  io.on('connection', socket => {
    console.log('user connected');

    socket.on('something', () => console.log('the thing'));
  });
};

export const emitSongAdd = ({ playlist }, uriList) =>
  io && io.emit('addSong', { playlist, uriList });

export const emitPlaylistCreate = user =>
  io && io.emit('makePlaylist', { user });

export const emitSongRemove = ({ playlist }, uris) =>
  io && io.emit('removeSong', { playlist, uris });

export default {
  init,
};
