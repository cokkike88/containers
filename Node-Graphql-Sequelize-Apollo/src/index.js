import config from './config';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schemas';
import resolvers from './resolvers';
import app from './server/server';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({app});
app.listen(config.port, () => {
    console.log(`Server is running in http://localhost:${config.port + server.graphqlPath}`);
})