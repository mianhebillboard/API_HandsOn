const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Tspot_employee = new schema({
    employee: {
        fname: {
            type: String
        },
        mname: {
            type: String
        },
        lname: {
            type: String
        },
        employee_number: {
            type: Number
        },
        birthday: {
            type: String
        },
        address: {
            type: String
        }
    }
});

const model = mongoose.model('tspot_employee', Tspot_employee);
module.exports = model;