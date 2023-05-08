import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.DB || 'mongodb://127.0.0.1:27017/apollo_server';

(
  async () => {
    try {
      const db = await mongoose.connect(port);
      console.log("connected to database: " + db.connection.name);
    } catch (e) {
      console.log(e.message);
    }
  })();