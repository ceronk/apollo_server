import express from 'express';
import './database/database.js';
import  {ApolloServer} from 'apollo-server-express';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

(async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.use("*", (req, res) => {
    res.status(404).json({"message": "Not Found"});
  });

  app.listen(port, () => {
    console.log("listening on port " + port);
  });

})();