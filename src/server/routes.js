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
      path: '/user/songs', method: 'GET', handler: user.songs.GET,
    },

    {
      path: '/user/add', method: 'POST', handler: user.addSongs.POST,
    },

    {
      path: '/user/playlist', method: 'GET', handler: user.playlist.GET,
    },

    {
      path: '/user/playlist', method: 'POST', handler: user.playlist.POST,
    },

  ],
};
