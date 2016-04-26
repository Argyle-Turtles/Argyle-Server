import user from './controllers/user';

export default {
  routes: [
    {
      path: '/user/:rfid', method: 'GET', handler: user.usercode.GET, // :D
    },

    {
      path: '/user/create', method: 'POST', handler: user.create.POST, // :D
    },

    {
      path: '/user/clear', method: 'POST', handler: user.clear.POST, // untested
    },

    {
      path: '/user/songs/rfid/:rfid', method: 'GET', handler: user.songs.GET, // :D
    },

    {
      path: '/user/songs/usercode/:usercode', method: 'GET', handler: user.songs.GET, // :D
    },

    {
      path: '/user/add', method: 'POST', handler: user.addSongs.POST, // :D
    },

    {
      path: '/user/playlist/rfid/:rfid', method: 'GET', handler: user.playlist.GET, // :D
    },

    {
      path: '/user/playlist/usercode/:usercode', method: 'GET', handler: user.playlist.GET, // :D
    },

    {
      path: '/user/playlist', method: 'POST', handler: user.playlist.POST,
    },

  ],
};
