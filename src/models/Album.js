import { Schema, model } from 'mongoose';

const albumSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  artist: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  released: {
    type: Number,
    required: true,
    trim: true
  },
  genre: [{
    type: String,
    required: true,
    trim: true
  }],
  style: [{
    type: String,
    required: true,
    trim: true
  }],
  format: {
    type: String,
    required: true,
    trim: true
  },
  notes: {
    type: String,
    default: ' ',
    trim: true
  },
  stock: {
    type: Boolean,
    trim: true,
    default: true
  },
  quantity: {
    type: Number,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  }
},
  {
    timestamps: true,
    versionKey: false
  });

export default model('Album', albumSchema);