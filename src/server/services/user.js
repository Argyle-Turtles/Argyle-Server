import R from 'ramda';
import Promise from 'bluebird';

import { model as User } from '../models/user';

/**
 * Clears out user rfid
 * @param {String} rfid - rfid number
 * @return {User}
 */
export const clearRFID = rfid =>
  User.findOne({ rfid })
  .exec()
  .then(u =>
    R.isNil(u) ?
      Promise.resolve(false) :
      u.update({ rfid: '0000000' }).exec());

/**
 * Create a new user
 * @param {String} usercode - Four digit code to set as unique id
 * @param {String} rfid - rfid number
 * @return {User}
 */
export const create = (usercode, rfid) =>
  clearRFID(rfid)
  .then(() => new User({ usercode, rfid }).save())
  .then(u => u.usercode);

/**
 * Finds user by rfid
 * @param {String} rfid - rfid number
 * @return {User}
 */
export const findByRFID = rfid =>
  User.findOne({ rfid })
  .exec()
  .then(u => u.usercode);

/**
 * Adds songs to user songlist
 * @param {String} rfid - rfid number
 * @return {User}
 */
export const addSongs = (rfid, songsToAdd) =>
  User.findOne({ rfid })
  .exec()
  .then(u => {
    u.songs = R.concat(u.songs, songsToAdd);
    return u.save();
  });

/**
 * Gets songs using user rfid
 * @param {String} rfid - rfid number
 * @return {Songs}
 */
export const getUserSongsByRFID = rfid =>
  User.findOne({ rfid })
  .exec()
  .then(u => u.songs);

/**
 * Gets songs using usercode
 * @param {String} usercode - unique usercode
 * @return {Songs}
 */
export const getUserSongsByUsercode = usercode =>
  User.findOne({ usercode })
  .exec()
  .then(u => u.songs);

/**
 * Sets user plalist
 * @param {String} playlistURI - spotify playlist uri
 * @return {User}
 */
export const setPlaylist = (usercode, playlistURI) =>
  User.findOne({ usercode })
  .exec()
  .then(u => {
    u.playlist = playlistURI;
    return u.save();
  });

/**
 * Gets playlist using user rfid
 * @param {String} rfid - rfid number
 * @return {playlist}
 */
export const getUserPlaylistByRFID = rfid =>
  User.findOne({ rfid })
  .exec()
  .then(u => u.playlist);

/**
 * Gets plaulist using usercode
 * @param {String} usercode - unique usercode
 * @return {playlist}
 */
export const getUserPLaylistByUsercode = usercode =>
  User.findOne({ usercode })
  .exec()
  .then(u => u.playlist);
