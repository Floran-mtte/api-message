const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MessageSchema = new Schema({
    _id: Number,
    content: {
        type: String,
        required: "Veuillez saisir un message"
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
}, {_id: false});

MessageSchema.plugin(AutoIncrement);

module.exports = MessageSchema;
