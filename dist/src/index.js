"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var http = require("http");
var server_1 = require("./server/server");
debug('ts-express:server');
var port = process.env.PORT || 3000;
server_1.default.set('port', port);
console.log("Server listening on port " + port);
var server = http.createServer(server_1.default);
server.listen(port);
//# sourceMappingURL=index.js.map