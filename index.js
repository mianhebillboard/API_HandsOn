const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const url = "mongodb://127.0.0.1:27017/TouristSpot";

mongoose.connect (url, {})
.then(console.log("MongoDB Connected"))
.catch(err => (err))

const tspot_details = require('./Route/tspot_details.route');
app.use('/tspot_details/', tspot_details);

const tspot_employee = require('./Route/tspot_employee.route');
app.use('/tspot_employee/', tspot_employee);

const tspot_reservation = require('./Route/tspot_reservation.route');
app.use('/tspot_reservation/', tspot_reservation);

app.use((req, next) => {
    console.log(req.body);
    next();
})

const port = process.env.PORT || 3000;
app.listen(port, () => `Listening on port ${port}`);