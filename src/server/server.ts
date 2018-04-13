import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as path from 'path';

// import routers
import TicketRouter from '../router/TicketRouter';
import UserRouter from '../router/UserRouter';

// Server class
class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config() {
        // setup mongoose
        const MONGO_URI_LOCALE: string = 'mongodb://localhost/express-boilerplate'
        const MONGO_URI_HEROKU: string = 'mongodb://sono.tullio:5285byte@ds243059.mlab.com:43059/heroku_2tqjfjwr'
        mongoose.connect(MONGO_URI_HEROKU || process.env.MONGO_URI);

        // config
        this.app.use(bodyParser.json()); //parsa i body di req e res in json.
        this.app.use(bodyParser.urlencoded({ extended: false })); // ???
        this.app.use(logger('dev')); // inserisce un sacco di log qua e la.
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    private routes(): void {
        let router: express.Router;
        router = express.Router();

        this.app.use('/', router);
        this.app.use('/api/tickets', TicketRouter);
        this.app.use('/api/users', UserRouter);
    }

}

// export
export default new Server().app;