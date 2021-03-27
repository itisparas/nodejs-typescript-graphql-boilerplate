import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { BookResolver } from "../resolvers/BookResolver";

export async function apolloServer(app: any) {
    const schema = await buildSchema({ resolvers: [BookResolver] });
    const server = new ApolloServer({
        schema, context: ({ req, res }) => ({
            req, res
        })
    });
    server.applyMiddleware({ app });
    return server;
}