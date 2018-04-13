import * as debug from 'debug';
import * as http from 'http';

import Server from './server/server';

debug('ts-express:server');

const port = process.env.PORT || 3000;
Server.set('port', port);

console.log(`Server listening on port ${port}`);

const server = http.createServer(Server);
server.listen(port);