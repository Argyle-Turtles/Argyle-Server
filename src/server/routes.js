import user from './controllers/user';

export default {
  routes: [
    {
      path: '/user', method: 'GET', handler: user.usercode,
    },

    {
      path: '/user/create', method: 'POST', handler: user.create,
    },

    {
      path: '/user/clear', method: 'POST', handler: user.clear,
    },
    //
    //
    // {
    //   path: '/user/songs', method: 'GET', handler: , // return song array
    // },
    //
    // {
    //   path: '/user/playlist', method: 'GET', handler: , // gets user playlist
    // },
    //
    // {
    //   path: '/user/add', method: 'POST', handler: , // adds song to user account
    // },
  ],
}
