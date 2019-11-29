const express = require('express');
const mongoose = require('mongoose');
const MessageModel = require('../Model/message');

let Message = mongoose.model('Message', MessageModel);

exports.MessageController = {
    addMessage: (req, res) => {
        let newMsg = new Message(req.body);
        newMsg.save((error, message) => {
            if(error) {
                res.send(error);
            }
            res.json(message);
        });
    }
};
