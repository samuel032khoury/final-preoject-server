import users from "../users/users.js";
import * as favoritesDao from './favorites-dao.js';

const FavoritesController = (app) => {
  const userFavoritesSong = async (req, res) => {
    const uid = req.params.uid;
    const sid = req.params.sid;
    const newFavorite = await favoritesDao.userFavoritesSong(uid, sid);
    res.json(newFavorite);
  };

  const userUnfavoritesSong = async (req, res) => {
    const uid = req.params.uid;
    const sid = req.params.sid;
    const status = await favoritesDao.userUnfavoritesSong(uid, sid);
    res.send(status);
  };
  
  const findAllFavorites = async (req, res) => {
    const favorites = await favoritesDao.findAllFavorites();
    res.json(favorites);
  };

  const findSongsFavoritedByUser = async (req, res) => {
      const uid = req.params.uid;
      const songs = await favoritesDao.findSongsFavoritedByUser(uid);
      res.json(songs);
  };

  const findUsersThatFavoritedSong = async (req, res) => {
    const sid = req.params.sid;
    const users = await favoritesDao.findUsersThatFavoritedSong(sid);
    res.json(users);
  };

  app.post('/users/:uid/favorites/:sid', userFavoritesSong);
  app.delete('/users/:uid/favorites/:sid', userUnfavoritesSong);
  app.get('/favorites', findAllFavorites);
  app.get('/users/:uid/favorites', findSongsFavoritedByUser);
  app.get('/songs/:sid/favorites', findUsersThatFavoritedSong);
};

export default FavoritesController;