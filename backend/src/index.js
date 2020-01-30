const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:adminpz@cluster0-qm4vg.mongodb.net/jsappdevs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//app.use(cors({ origin: 'http://localhost:3000' })); No caso abaixo, estamos deixando genérico, qlqr aplicação tem acesso
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);