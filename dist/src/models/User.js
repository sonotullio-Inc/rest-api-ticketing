"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    name: {
        type: String,
        default: '',
        required: true,
    },
    username: {
        type: String,
        default: '',
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        default: '',
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    role: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map