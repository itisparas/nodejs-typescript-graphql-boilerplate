import express from 'express';
import helmet from 'helmet';
import { port } from './constants';
import { dbConn } from './services/db';
import { apolloServer } from './services/apollo';
import { logger } from './services/logger';

async function main(): Promise<void> {

  dbConn();

  const app = express();

  const server = await apolloServer(app);

  app.use(helmet());

  app.get('/', (req, res) => {
    res.send(`Apollo server running at http://localhost:${port}${server.graphqlPath}`);
  });

  app.listen(port, () => logger.info(`Server running at http://localhost:${port}`))

}

main();