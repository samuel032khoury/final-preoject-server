import songsModel from "./songs-model.js";

export const findAllSongs = async () => {
    const songs = await songsModel.find()
    return songs
}
export const createSong = async (movie) => {
    const actualInsertedSong = await songsModel.create(movie)
    return actualInsertedSong
}
export const deleteSong = async (sid) => {
    const status = await songsModel.deleteOne({_id: sid})
    return status
}
export const updateSong = (sid, updates) => {}