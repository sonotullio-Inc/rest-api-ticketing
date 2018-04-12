"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Ticket_1 = require("../models/Ticket");
var TicketRouter = /** @class */ (function () {
    function TicketRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    TicketRouter.prototype.GetTickets = function (req, res) {
        Ticket_1.default.find({})
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    TicketRouter.prototype.GetTicket = function (req, res) {
        var number = req.params.number;
        Ticket_1.default.findOne({ number: number })
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    TicketRouter.prototype.CreateTicket = function (req, res) {
        var title = req.body.title;
        var number = req.body.number;
        var description = req.body.description;
        var priority = req.body.priority;
        var state = req.body.state;
        var ticket = new Ticket_1.default({
            title: title,
            number: number,
            description: description,
            priority: priority,
            state: state
        });
        ticket.save()
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    TicketRouter.prototype.UpdateTicket = function (req, res) {
        var number = req.params.number;
        Ticket_1.default.findOneAndUpdate({ number: number }, req.body)
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    TicketRouter.prototype.DeleteTicket = function (req, res) {
        var number = req.params.number;
        Ticket_1.default.findOneAndRemove({ number: number })
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    TicketRouter.prototype.routes = function () {
        this.router.post('/', this.CreateTicket);
        this.router.get('/', this.GetTickets);
        this.router.get('/:number', this.GetTicket);
        this.router.put('/:number', this.UpdateTicket);
        this.router.delete('/:number', this.DeleteTicket);
    };
    return TicketRouter;
}());
//export
var ticketRoutes = new TicketRouter();
ticketRoutes.routes();
exports.default = ticketRoutes.router;
