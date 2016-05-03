let io;

const init = newIO => {
  io = newIO;
  io.on('connection', socket => {
    console.log('user connected');

    socket.on('something', () => console.log('the thing'));
  });
};

export const emitSongAdd = (playlist, uriList) =>
  io && io.emit('addSongs', { playlist, uriList });

export const emitPlaylistCreate = user =>
  io && io.emit('playlistCreate', { user });

export const emitSongRemove = (playlist, uri) =>
  io && io.emit('songRemove', { playlist, uri });

export default {
  init,
};
