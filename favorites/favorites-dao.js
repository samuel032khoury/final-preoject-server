import favoritesModel from "./favorites-model.js";

export const userFavoritesSong = async (uid, sid) => {
  return await favoritesModel.create({user: uid, song: sid});
};

export const userUnfavoritesSong = async (uid, sid) => {
  return await favoritesModel.deleteOne({user: uid, song: sid});
};

export const findSongsFavoritedByUser = async (uid) => {
  return await favoritesModel
    .find({user: uid}, {user: false});
};

export const findUsersThatFavoritedSong = async (sid) => {
  return await favoritesModel
    .find({song: sid}, {song: false})
    .populate('user')
    .exec()
};

export const findAllFavorites = async () => await favoritesModel.find();
