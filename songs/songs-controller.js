import * as songDao from "./songs-dao.js";

const SongsController = (app) => {
  const createSong = async (req, res) => {
    const song = req.body;
    const existingSong = await songDao.findSongByID(song.id);
    if (existingSong) {
      res.send(200);
      return;
    } else {
      const actualSong = await songDao.createSong(song);
      res.json(actualSong);
    }
  };

  const findSongByID = async (req, res) => {
    const songID = req.params.songID;
    const actualSong = await songDao.findSongByID(songID);
    res.json(actualSong);
  };

  const findAllSongs = async (req, res) => {
    const songs = await songDao.findAllSongs();
    res.json(songs)
  }

  app.post("/api/songs", createSong);
  app.get("/api/songs/:songID", findSongByID);
  app.get("/api/songs", findAllSongs)
};

export default SongsController;
