import Album from '../models/Album.js';

export const createAlbum = async (_, args) => {
  const { title, artist, country, released, genre, style, format, notes, stock, quantity, price } = args.album
  const album = new Album({ title, artist, country, released, genre, style, format, notes, stock, quantity, price });
  await album.save();
  return album;
};

export const readAlbums = async (_, args) => {
  const albums = await Album.find();
  return albums;
};

export const readAlbum = async (_, args) => {
  const { id } = args;
  const albums = await Album.findById(id);
  return albums;
};

export const updateAlbum = async (_, { id, album }) => {
  const updatedAlbum = await Album.findByIdAndUpdate(id, { $set: album }, { new: true });
  return updatedAlbum;
};

export const deleteAlbum = async (_, args) => {
  const { id } = args;
  const album = await Album.findByIdAndDelete(id);
  return (!album) ? 'Album not found' : 'Album deleted successfully';
};

export const findByArtist = async (_, args) => {
  const { artist } = args;
  const albums = await Album.find({ artist: artist });
  return albums;
};

export const findByCountry = async (_, args) => {
  const { country } = args;
  const albums = await Album.find({ country: country });
  return albums;
};

export const findByFormat = async (_, args) => {
  const { format } = args;
  const albums = await Album.find({ format: format });
  return albums;
};