import songsModel from "./songs-model.js";

export const findAllSongs = async () => {
  const songs = await songsModel.find();
  return songs;
};
export const createSong = async (song) => {
  const actualSong = await songsModel.create(song);
  return actualSong;
};

export const findSongByID = async (songID) => {
    const song = await songsModel.findOne({id: songID})
    return song
};
export const deleteSong = async (sid) => {
  const status = await songsModel.deleteOne({ _id: sid });
  return status;
};

export const updateSong = (sid, updates) => {};
