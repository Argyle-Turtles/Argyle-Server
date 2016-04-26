import user from './controllers/user';

export default {
  routes: [
    {
      path: '/user', method: 'GET', handler: user.usercode.GET,
    },

    {
      path: '/user/create', method: 'POST', handler: user.create.POST,
    },

    {
      path: '/user/clear', method: 'POST', handler: user.clear.POST,
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
