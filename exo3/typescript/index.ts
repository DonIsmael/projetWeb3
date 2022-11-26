import express from 'express';
import personRouter from './routes/person';
const mongoose = require('mongoose');
const {MONGODB_URI, PORT} = require('./config/config');

// conexion a la DB mongoDB
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('CONNECTION SUCCESS') // conexion DB -> OK
    })
    .catch(() => {
        console.log("error"); 
    });

//creation du serveur 
const app = express();
app.use(express.json());


app.use(personRouter);


// affichage du port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});