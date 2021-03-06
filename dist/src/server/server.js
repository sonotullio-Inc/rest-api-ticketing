"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var compression = require("compression");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var path = require("path");
// import routers
var TicketRouter_1 = require("../router/TicketRouter");
var UserRouter_1 = require("../router/UserRouter");
// Server class
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        // setup mongoose
        var MONGO_URI_LOCALE = 'mongodb://localhost/express-boilerplate';
        var MONGO_URI_HEROKU = 'mongodb://sono.tullio:5285byte@ds243059.mlab.com:43059/heroku_2tqjfjwr';
        mongoose.connect(MONGO_URI_HEROKU || process.env.MONGO_URI);
        // config
        this.app.use(bodyParser.json()); //parsa i body di req e res in json.
        this.app.use(bodyParser.urlencoded({ extended: false })); // ???
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(logger('dev')); // inserisce un sacco di log qua e la.
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/tickets', TicketRouter_1.default);
        this.app.use('/api/users', UserRouter_1.default);
    };
    return Server;
}());
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map