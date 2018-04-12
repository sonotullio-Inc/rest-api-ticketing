"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TicketSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    title: {
        type: String,
        default: '',
        required: true,
    },
    number: {
        type: String,
        default: '',
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        default: '',
        required: true
    },
    priority: {
        type: String,
        default: '',
        required: true
    },
    state: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose_1.model('Post', TicketSchema);
