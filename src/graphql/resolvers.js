import * as albumController from '../controllers/album.controller.js';

export const resolvers = {
  Query: {
    readAlbums: albumController.readAlbums,
    readAlbum: albumController.readAlbum,
    findByArtist: albumController.findByArtist,
    findByCountry: albumController.findByCountry,
    findByFormat: albumController.findByFormat
  },
  Mutation: {
    createAlbum: albumController.createAlbum,
    updateAlbum: albumController.updateAlbum,
    deleteAlbum: albumController.deleteAlbum
  },
  Album: {
    stock: (root) => (root.quantity == 0) ? false : true
  } 
};