"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var compression = require("compression");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
// import routers
var PostRouter_1 = require("./router/PostRouter");
var PostRouter_2 = require("./router/PostRouter");
// Server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        // setup mongoose
        var MONGO_URI = 'mongodb://localhost/express-boilerplate';
        mongoose.connect(MONGO_URI || process.env.MONGO_URI);
        // config
        this.app.use(bodyParser.json()); //parsa i body di req e res in json.
        this.app.use(bodyParser.urlencoded({ extended: false })); // ???
        this.app.use(logger('dev')); // inserisce un sacco di log qua e la.
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/posts', PostRouter_1.default);
        this.app.use('/api/users', PostRouter_2.default);
    };
    return Server;
}());
// export
exports.default = new Server().app;
