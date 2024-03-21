const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Tspot_details = new schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    time: {
        open: {
            type: String
        },
        close: {
            type: String
        }
    }
}, 
{timestamps: true}
);

const model = mongoose.model('tspot_details', Tspot_details);
module.exports = model;