import { Schema, model } from 'mongoose';

let TicketSchema: Schema = new Schema({

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

export default model('Post', TicketSchema);