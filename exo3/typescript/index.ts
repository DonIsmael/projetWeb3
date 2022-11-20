import express from 'express';
import personRouter from './routes/person';
const mongoose = require('mongoose');
const {MONGODB_URI, PORT} = require('./config/config');


mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('CONNECTION SUCCESS')
    })
    .catch(() => {
        console.log("error");
    });


const app = express();
app.use(express.json());


app.use(personRouter);




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});