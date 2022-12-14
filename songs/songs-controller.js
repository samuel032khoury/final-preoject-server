import * as songDao from './songs-dao.js'

const SongsController = (app) => {
  const createSong = async (req,res) => {
    const moviesInDatabase = await songDao.findAllSongs()
    res.send(moviesInDatabase)
  }
  const findAllSongs = async (req,res) => {
    const songsInDatabase = await songDao.findAllSongs()
    res.send(songsInDatabase)
  }
  const updateSong = async (req,res) => {
    const sid = req.params['sid']
    const songUpdates = req.body
    const status = songDao.updateSong(sid, songUpdates)
    res.send(status)
  }
  const deleteSong = async (req,res) => {
    const sid = req.params['sid']
    const status = await songDao.deleteSong()
  }

  app.post  ('/songs', createSong)
  app.get   ('/songs', findAllSongs)
  app.put   ('/songs/:sid', updateSong)
  app.delete('/songs/:sid', deleteSong)
}

export default SongsController;