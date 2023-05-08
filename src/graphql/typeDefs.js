import { gql } from 'apollo-server-express';

export const typeDefs = gql`
input AlbumInput{
  title: String,
  artist: String,
  country: String,
  released: Int,
  genre: [String],
  style: [String],
  format: String,
  notes: String,
  stock: String,
  quantity: Int,
  price: Float
}

type Album {
  id: ID,
  title: String,
  artist: String,
  country: String,
  released: Int,
  genre: [String],
  style: [String],
  format: String,
  notes: String,
  stock: String,
  quantity: Int,
  price: Float
}

type Query{
  readAlbums: [Album],
  readAlbum(id: ID!): Album,
  findByArtist(artist: String!): [Album],
  findByCountry(country: String!): [Album],
  findByFormat(format: String!): [Album]
}

type Mutation{
  createAlbum(album: AlbumInput!): Album!,
  updateAlbum(id:ID!, album: AlbumInput): Album,
  deleteAlbum(id: ID!): String 
}

`; 