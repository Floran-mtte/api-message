const express = require('express');
const router = require('./src/routes/route');
const mongoose = require('mongoose');

const app = express();
const uri = "mongodb+srv://root:password@node-course-bxmwp.gcp.mongodb.net/MessageDB?retryWrites=true&w=majority";
let PORT = '3000';

let connect = mongoose.connect(uri, {useNewUrlParser: true});

app.use(express.json());
router(app);



app.listen(PORT);
