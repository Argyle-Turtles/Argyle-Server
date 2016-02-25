import playlist from './controllers/playlist';
import media from './controllers/media';

export default {
  routes: [
    {
      path: '/create', method: 'POST', handler: playlist.create,
    },

    {
      path: '/add', method: 'POST', handler: playlist.add,
    },

    {
      path: '/remove', method: 'POST', handler: playlist.remove,
    },

    {
      path: '/playlist', method: 'GET', handler: playlist.get,
    },

    {
      path: '/media', method: 'GET', handler: media.get,
    }
  ],
}
