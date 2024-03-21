const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Tspot_reservation = new schema({
    date: {
        type: String
    },
    occasion: {
        type: String
    },
    numberofGuest: {
        type: Number
    },
    time: {
        arrival: {
            type: String
        },
        departure: {
            type: String
        }
    }
},
{timestamps:true}
)
    

const model = mongoose.model('tspot_reservation', Tspot_reservation);
module.exports = model;